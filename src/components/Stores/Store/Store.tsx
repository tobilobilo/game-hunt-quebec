import "./Store.scss";
import Button from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useAppNavigation } from "../../../hooks/useNavigation";

const Store = () => {
  const { t } = useTranslation();
  const { storeId } = useParams();
  const { goToHome } = useAppNavigation();

  function suggestChange() {
    console.log('suggest change')
  }

  if(!storeId) return;

  return (
    <>
      {storeId && <div className="store-overlay">
        <section className="store-content">
          <div className="store-close-wrapper">
            <button className="store-close" onClick={goToHome} aria-label={t("action.close")}>×</button>
          </div>
          <div className="store-info-wrapper">
            <img src="https://baconmockup.com/800/200" alt="placeholder" className="store-img" />
            <div className="store-info">
              <h1>Retro MTL</h1>
              <span className="adress">4023 Rue Hochelaga, Montréal, QC H1W 1K4</span>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam tellus. Praesent lobortis ex quis ante tincidunt imperdiet at ac ligula. Vivamus id justo vel nisi ultrices convallis at ac dui.</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam tellus. Praesent lobortis ex quis ante tincidunt imperdiet at ac ligula. Vivamus id justo vel nisi ultrices convallis at ac dui.</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam tellus. Praesent lobortis ex quis ante tincidunt imperdiet at ac ligula. Vivamus id justo vel nisi ultrices convallis at ac dui.</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam tellus. Praesent lobortis ex quis ante tincidunt imperdiet at ac ligula. Vivamus id justo vel nisi ultrices convallis at ac dui.</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam tellus. Praesent lobortis ex quis ante tincidunt imperdiet at ac ligula. Vivamus id justo vel nisi ultrices convallis at ac dui.</p>
              <div className="store-ctas">
                <Button href="#" textKey="Site Web" size="btn-sm" />
              </div>
              <button className="suggest-change" onClick={suggestChange}>Proposer un changement pour cette boutique</button>
            </div>
          </div>
        </section>
      </div> }
    </>
  );
};

export default Store;