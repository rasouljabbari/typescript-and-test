import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fa: {
    translation: {
      "validation": {
        "fields": {
          "name": "نام",
          "username": "نام کاربری",
          "password": "رمز عبور",
          "email": "ایمیل",
          "about": "درباره من",
        },
        "required": "وارد کردن فیلد {{field}} الزامی است"
      }
    }
  }
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