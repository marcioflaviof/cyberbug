import { useTranslation } from "react-i18next";
import { blenderBold } from "src/app/layout";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-col gap-6 text-center text-black mb-4">
      <li>
        <a className="font-blender-bold">
          {t("termsandprivacy")} {"<"}
        </a>
      </li>
      <li>
        <a className="font-blender-bold">
          {t("careers")} {"<"}
        </a>
      </li>
      <li>
        <a className="font-blender-bold">
          {t("useragreement")} {"<"}
        </a>
      </li>
      <li>
        <a className={blenderBold.className}>
          {t("guidelines")} {"<"}
        </a>
      </li>
    </ul>
  );
};

export { Terms };
