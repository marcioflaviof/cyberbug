"use client";

import { useTranslation } from "react-i18next";

import { SubmitButton } from "@atoms/buttons/SubmitButton";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="bg-razor-bottom-black content-[' '] h-10 absolute right-0 left-0 top-[-1px] bg-top bg-repeat-x" />
      <div className="flex px-10 pt-12 flex-col justify-center items-center w-full mb-16 before:bg-razor-bottom-black before:content-[' '] before:h-10 before:absolute before:right-0 before:left-0 before:top-[-1px] before:bg-top before:bg-repeat-x">
        <h1 className="text-5xl uppercase text-center max-w-[350px]">
          {t("alwaysFirst")}
        </h1>
        <span className="font-blender-bold max-w-xl text-xl mt-3 mb-4 break-words text-center">
          {t("signNewsletter")}
        </span>

        <div className="relative mb-5">
          <input
            className="bg-yellow-200 min-w-[290px] pb-2 text-2xl outline-none border-b-black border-b-2 break-words peer"
            id="newsletter_userEmail"
            type="email"
            required
            placeholder=""
          />
          <label
            className="absolute -top-5 text-black text-sm left-0 select-none cursor-text peer-placeholder-shown:text-2xl peer-placeholder-shown:text-yellow-400 peer-focus:text-sm peer-focus:text-black peer-focus:-top-5 transition-all duration-300 peer-placeholder-shown:top-1 peer-invalid:peer-focus:text-red-100"
            htmlFor="newsletter_userEmail"
          >
            {t("emailAddress")}
          </label>
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
