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
          findus: "Find us on",
          cookieDeclaration: "Cookie Declaration",
          rightsOwner: `CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2022 CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their respective owners.`,
        },
      },
      pt: {
        translation: {
          termsandprivacy: "Termos de Uso e Politica de Privacidade",
          careers: "Carreiras",
          useragreement: "Termos de Licença",
          guidelines: "Guias de Conteudo",
          findus: "Encontre-nos no(a)",

          cookieDeclaration: "Declaração de Cookies",
          rightsOwner: `CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® são marcas registradas da CD PROJEKT S.A. © 2022 CD PROJEKT S.A. Todos os direitos reservados. Todos os direitos autorais e marcas registradas são de propriedade dos seus respectivos donos.`,
        },
      },
    },
  });
