import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { basename } from "./utils/path.ts";
import { SUPPORTED_LOCALES, FALLBACK_LOCALE } from "./config/global.ts";

i18n
  .use(Backend) // to load translations from the /locale folder
  .use(LanguageDetector) // to detect the user's language
  .use(initReactI18next) // to integrate with React
  .init({
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: FALLBACK_LOCALE,
    debug: false, // enable to debug logs
    interpolation: {
      escapeValue: false, // not needed for React
    },
    backend: {
      loadPath: basename().concat('/locales/{{lng}}.json'), // path to the translation files
    },
  });

export default i18n;