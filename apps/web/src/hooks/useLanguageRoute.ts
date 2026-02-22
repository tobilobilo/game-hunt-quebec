import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

const useLanguageRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (
      !params.lang ||
      (Array.isArray(i18n.options.supportedLngs) &&
        !i18n.options.supportedLngs.includes(params.lang))
    ) {
      navigate(`/${i18n.options.fallbackLng}`);
      return;
    }

    i18n.changeLanguage(params.lang);
  }, [params.lang, navigate, i18n]);
};

export default useLanguageRoute;
