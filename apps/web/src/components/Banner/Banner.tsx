import { useTranslation } from "react-i18next";
import "./Banner.scss";
import iconRoad from "/src/assets/svg/banner-road.svg";
import iconCar from "/src/assets/svg/banner-car.svg";
import iconController from "/src/assets/svg/banner-controller.svg";
import iconDollar from "/src/assets/svg/banner-dollar.svg";
import iconGameboy from "/src/assets/svg/banner-gameboy.svg";
import iconSnes from "/src/assets/svg/banner-snes.svg";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner col-12">
      <p>{t("motto")}</p>
      <div className="icons-container" aria-hidden="true">
        <img src={iconRoad} alt="banner icon" className="banner-icon icon-road" aria-hidden="true" draggable="false" />
        <img src={iconCar} alt="banner icon" className="banner-icon icon-car" aria-hidden="true" draggable="false" />
        <img src={iconController} alt="banner icon" className="banner-icon icon-controller" aria-hidden="true" draggable="false" />
        <img src={iconDollar} alt="banner icon" className="banner-icon icon-dollar" aria-hidden="true" draggable="false" />
        <img src={iconGameboy} alt="banner icon" className="banner-icon icon-gameboy" aria-hidden="true" draggable="false" />
        <img src={iconSnes} alt="banner icon" className="banner-icon icon-snes" aria-hidden="true" draggable="false" />
      </div>
    </div>
  );
};

export default Banner;
