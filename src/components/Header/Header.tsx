import { useTranslation } from "react-i18next";
import "./Header.scss";
import logo from "/src/assets/svg/logo-round-white.svg";
import { useAppNavigation } from "../../hooks/useNavigation";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { goToHome, changeLanguage } = useAppNavigation();

  return (
    <header className="main-header col-12">
      <div className="main-header-content">
        <h1>
          <button onClick={goToHome}>
            <img src={logo} alt="Logo" className="header-logo" aria-hidden="true" />
            {t("title")}
          </button>
        </h1>
        <div className="change-language">
          {i18n.language !== "en" && (
            <button onClick={() => changeLanguage("en")} className="button">
              english
            </button>
          )}
          {i18n.language !== "fr" && (
            <button onClick={() => changeLanguage("fr")} className="button">
              français
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
