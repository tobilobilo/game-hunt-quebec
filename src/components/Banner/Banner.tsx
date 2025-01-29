import { useTranslation } from "react-i18next";
import "./Banner.scss";

const Banner = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner col-12">
      <p>{t("banner.main")}</p>
    </div>
  );
};

export default Banner;
