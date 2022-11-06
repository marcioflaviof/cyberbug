"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          termsandprivacy: "Terms of User & Privacy Policy",
          careers: "Careers",
          useragreement: "User agreement",
          guidelines: "Fan Content Guidelines",
        },
      },
      pt: {
        translation: {
          termsandprivacy: "Termos de Usuario e Politica de Privacidade",
          careers: "Carreiras",
          useragreement: "Termos de Licensa",
          guidelines: "Guias de Conteudo",
        },
      },
    },
  });
