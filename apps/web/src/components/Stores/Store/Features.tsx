import { useTranslation } from "react-i18next";
import { useStore } from "../../../hooks/useStore";
import {
  faArrowPointer,
  faCarBattery,
  faCartShopping,
  faCompactDisc,
  faSackDollar,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
  const { t } = useTranslation();
  const { store } = useStore();

  const hasFeatures = store?.features && store.features.length > 0;

  function featureIcon(feature: number) {
    switch (feature) {
      case 0:
        return faCartShopping;
      case 1:
        return faSackDollar;
      case 2:
        return faScrewdriverWrench;
      case 3:
        return faCompactDisc;
      case 4:
        return faCarBattery;
      default:
        return faArrowPointer;
    }
  }

  return (
    <>
      {hasFeatures && (
        <div className="features">
          {store?.features.map((feature) => (
            <div key={`${store.slug}-feature-${feature}`} className="feature">
              <FontAwesomeIcon icon={featureIcon(feature)} />{" "}
              {t(`store.features.feature-${feature}`)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Features;
