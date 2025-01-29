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
      <h1>{t("appname")}</h1>
      <p>{i18n.language}</p>
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
    </header>
  );
};

export default Header;
