import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

export const initI18next = () => {
  const userLang =
    typeof window !== "undefined"
      ? localStorage.getItem("lang") || navigator.language.split("-")[0] || "en"
      : "en";

  return i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    lng: userLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};

export default i18next;
