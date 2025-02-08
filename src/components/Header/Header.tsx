import { useTranslation } from "react-i18next";
import "./Header.scss";
import { useNavigate, useParams } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const params = useParams();

  function changeLanguage(lang: string): void {
    const store = params.store ? `/${params.store}` : "";
    navigate(`/${lang}${store}`);
  }

  return (
    <header className="main-header col-12">
      <div className="main-header-content">
        <h1>
          <img src="./src/assets/svg/logo-round-white.svg" alt="Logo" className="header-logo" aria-hidden="true" />
          {t("title")}
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
