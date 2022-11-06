import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <ul className="font-blender-bold flex flex-col gap-6 text-center text-black mb-4">
      <li>
        <a>
          {t("termsandprivacy")} {"<"}
        </a>
      </li>
      <li>
        <a>
          {t("careers")} {"<"}
        </a>
      </li>
      <li>
        <a>
          {t("useragreement")} {"<"}
        </a>
      </li>
      <li>
        <a>
          {t("guidelines")} {"<"}
        </a>
      </li>
    </ul>
  );
};

export { Terms };
