import "./Store.scss";
import { useTranslation } from "react-i18next";
import { useAppNavigation } from "../../../hooks/useNavigation";
import { useStore } from "../../../hooks/useStore";
import { getLabel } from "../../../utils/label";
import Ctas from "./Ctas";
import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAddress } from "../../../utils/store";
import Features from "./Features";
import ContactForm from "../../ContactForm/ContactForm";
import { useState, useEffect, useRef } from "react";


const Store = () => {
  const { t } = useTranslation();
  const { goToHome } = useAppNavigation();
  const { store } = useStore();
  const [showForm, setShowForm] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentRefMobile = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!showForm || !contentRef.current || !contentRefMobile.current) return;
    const contentWrapper = contentRef.current;
    const contentWrapperMobile = contentRefMobile.current;
    const raf = requestAnimationFrame(() => {
      contentWrapper.scrollTo({ top: contentWrapper.scrollHeight, behavior: "smooth" });
      contentWrapperMobile.scrollTo({ top: contentWrapperMobile.scrollHeight, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [showForm]);

  function closeModal() {
    setShowForm(false);
    goToHome();
  }

  return (
    <>
      {store && <div className="store-overlay" onClick={closeModal}>
        <section className="store-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
          <div className="store-close-wrapper">
            <button className="store-close" onClick={closeModal} aria-label={t("action.close")}>×</button>
          </div>
          <div className="store-info-wrapper" ref={contentRefMobile}>
            <div className="store-img-wrapper">
              { store?.image && <img src={store?.image} alt={t("stores.image_alt")} className="store-img" /> }
            </div>
            <div className="store-info">
              <div className="store-info-top">
                <div>
                  { store?.name && 
                    <h1>{store?.name}</h1>
                  }
                  { getAddress(store) && 
                    <p className="address">
                      { getAddress(store) }
                    </p>
                  }
                  { store?.phone && 
                    <p className="phone">
                      <FontAwesomeIcon icon={faPhone} />&nbsp; {store?.phone}
                    </p>
                  }
                </div>
                <div>
                  <Ctas />
                </div>
              </div>             

              <Features />
              
              { store?.description && 
                <p className="description">
                  {getLabel(store?.description, i18n.language)}
                </p>
              }
              
              <button className={`suggest-change ${showForm ? "expanded" : ""}`} onClick={() => setShowForm(prev => !prev)}>
                {t("store.propose_changes")} <FontAwesomeIcon icon={faCaretDown} />
              </button>

              {showForm && <ContactForm id={store?.slug} theme="light" />}
            </div>
          </div>
        </section>
      </div> }
    </>
  );
};

export default Store;