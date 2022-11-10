import { useTranslation } from "react-i18next";

import { SubmitButton } from "@atoms/buttons/SubmitButton";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="bg-razor-bottom-black content-[' '] h-10 absolute right-0 left-0 top-[-1px] bg-top bg-repeat-x" />
      <div className="flex flex-col justify-center items-center w-full mb-16 pt-16">
        <h1 className="text-5xl uppercase text-center max-w-[350px]">
          {t("alwaysFirst")}
        </h1>
        <span className="font-blender-bold max-w-xs text-xl mt-3 mb-4 break-words text-center">
          {t("signNewsletter")}
        </span>
        <div className="relative mb-5">
          <label
            className="absolute text-yellow-400 text-2xl bottom-1 left-2"
            htmlFor="newsletter_userEmail"
          >
            {t("emailAddress")}
          </label>
          <input
            className="bg-yellow-200 min-w-[290px]  pb-1 text-2xl outline-none border-b-black border-b-2 break-words"
            id="newsletter_userEmail"
            type="email"
            required
            placeholder=""
          />
        </div>
        <div className="flex items-start max-w-[350px] px-9 mb-5">
          <input
            type="checkbox"
            className="mr-2 border-none outline-none cursor-pointer"
          />
          <div className="flex flex-col text-sm">
            <p>
              {t("receiveNews")}
              <br />
              <br />
              {t("psersonalDataResponsability")}{" "}
              <a
                className="underline"
                href="https://regulations.cdprojektred.com/en/privacy_policy"
              >
                {t("privacyPolicy")}
              </a>
            </p>
          </div>
        </div>
        <SubmitButton />
      </div>
    </section>
  );
};

export { Newsletter };
