import { useTranslation } from "react-i18next";
import { ArrorDown } from "src/components/atoms/icons/ArrowDown/ArrowDown";
import { World } from "src/components/atoms/icons/World/World";

const lngs = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

const CookieDeclaration = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className="flex flex-col items-center">
      <a
        href={"https://www.cyberpunk.net/br/en/#"}
        target="_blank"
        rel="noreferrer"
        className="font-bold mb-3 text-center"
      >
        {t("cookieDeclaration")} {"<"}
      </a>
      <p className="text-xs px-4 mb-7">{t("rightsOwner")}</p>
      <div className="flex relative">
        <World className="mr-2 h-6 w-6" />
        <select
          name="languages"
          value={i18n.language}
          className="appearance-none mb-7 pr-3 bg-yellow font-bold text-lg border-b border-black hover:cursor-pointer"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng}>
              {lngs[lng as keyof typeof lngs].nativeName}
            </option>
          ))}
        </select>

        <ArrorDown className="absolute right-0 top-2.5" />
      </div>
    </section>
  );
};

export { CookieDeclaration };
