import { useTranslation } from "react-i18next";
import "./Banner.scss";

const Banner = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner col-12">
      <p>{t("motto")}</p>
      <div className="icons-container" aria-hidden="true">
        <img src="/src/assets/svg/banner-road.svg" alt="banner icon" className="banner-icon icon-road" aria-hidden="true" draggable="false" />
        <img src="/src/assets/svg/banner-car.svg" alt="banner icon" className="banner-icon icon-car" aria-hidden="true" draggable="false" />
        <img src="/src/assets/svg/banner-controller.svg" alt="banner icon" className="banner-icon icon-controller" aria-hidden="true" draggable="false" />
        <img src="/src/assets/svg/banner-dollar.svg" alt="banner icon" className="banner-icon icon-dollar" aria-hidden="true" draggable="false" />
        <img src="/src/assets/svg/banner-gameboy.svg" alt="banner icon" className="banner-icon icon-gameboy" aria-hidden="true" draggable="false" />
        <img src="/src/assets/svg/banner-snes.svg" alt="banner icon" className="banner-icon icon-snes" aria-hidden="true" draggable="false" />
      </div>
    </div>
  );
};

export default Banner;
