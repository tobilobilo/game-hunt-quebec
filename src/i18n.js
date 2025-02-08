import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // to load translations from the /locale folder
  .use(LanguageDetector) // to detect the user's language
  .use(initReactI18next) // to integrate with React
  .init({
    supportedLngs: ['en', 'fr'], // Only support English and French
    fallbackLng: 'fr', // fallback language if the user's language isn't available
    debug: true, // enable debug logs
    interpolation: {
      escapeValue: false, // not needed for React
    },
    backend: {
      loadPath: './src/locales/{{lng}}.json', // path to the translation files
    },
  });

export default i18n;