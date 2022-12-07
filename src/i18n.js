import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFa from './assets/translation/fa.json'

const resources = {
  fa: {
    translation: translationFa
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;