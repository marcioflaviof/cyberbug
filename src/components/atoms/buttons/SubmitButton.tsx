import { useTranslation } from "react-i18next";

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <button className="font-blender-bold bg-button bg-no-repeat text-2xl h-16 w-[264px] uppercase">
      {t("submit")}
    </button>
  );
};

export { SubmitButton };
