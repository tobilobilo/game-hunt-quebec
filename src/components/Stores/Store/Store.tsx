import "./Store.scss";
import { useTranslation } from "react-i18next";
import { useAppNavigation } from "../../../hooks/useNavigation";
import { useStore } from "../../../hooks/useStore";
import { getLabel } from "../../../utils/label";
import Ctas from "./Ctas";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAddress } from "../../../utils/store";
import Features from "./Features";


const Store = () => {
  const { t } = useTranslation();
  const { goToHome } = useAppNavigation();
  const { store } = useStore();
  const { i18n } = useTranslation();

  function suggestChange() {
    console.log('suggest change TODO')
  }

  return (
    <>
      {store && <div className="store-overlay">
        <section className="store-content">
          <div className="store-close-wrapper">
            <button className="store-close" onClick={goToHome} aria-label={t("action.close")}>×</button>
          </div>
          <div className="store-info-wrapper">
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

              
              <button className="suggest-change" onClick={suggestChange}>Proposer un changement pour cette boutique</button>
            </div>
          </div>
        </section>
      </div> }
    </>
  );
};

export default Store;