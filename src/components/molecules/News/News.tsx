"use client";

import { useTranslation } from "react-i18next";
import { NewsCard } from "@atoms/NewsCard/NewsCard";
import { SectionTitle } from "@atoms/SectionTitle/SectionTitle";

const News = () => {
  const { t } = useTranslation();

  return (
    <section className="items-center bg-black px-3 pb-14">
      <SectionTitle title={t("news")} />
      <ul className="flex flex-col items-center">
        <li className="group bg-blue-50 py-5 px-7 w-full hover:bg-white">
          <a href="https://www.cyberpunk.net/en/news/46420/patch-1-61-list-of-changes">
            <div className="flex justify-between items-center">
              <div className="bg-black h-[2px] w-7 content-['']" />
              <div className="font-blender-bold uppercase text-[7px] tracking-[2px] group-hover:hidden">
                05.11.2022
              </div>
              <div className="font-blender-bold uppercase text-[7px] tracking-[2px] hidden group-hover:block">
                {t("more")}
              </div>
            </div>
            <h3 className="text-left text-xl font-blender-bold mt-16">
              {t("listofchanges")}
            </h3>
            <p className="text-xs mt-8 font-bold ml-10">{t("soonavailable")}</p>
          </a>
        </li>
        <NewsCard
          date="21.10.2022"
          subtitle={t("cardOne")}
          link="https://www.cyberpunk.net/en/news/46165/community-party-at-lucca-comics-games-2022"
        />
        <NewsCard
          date="14.10.2022"
          subtitle={t("cardTwo")}
          link="https://www.cyberpunk.net/en/news/46105/89-7-growl-fm-your-underground-road-to-fame-cyberpunk-2077-phantom-liberty-music-contest"
        />
        <NewsCard
          date="26.09.2022"
          subtitle={t("cardThree")}
          link="https://www.cyberpunk.net/en/news/45781/win-nvidia-geforce-rtx-4090-gpu-with-cyberpunk-2077-backplate"
        />
        <NewsCard
          date="23.09.2022"
          subtitle={t("cardFour")}
          link="https://www.cyberpunk.net/en/news/45754/thank-you-for-celebrating-20-years-of-cd-projekt-red"
        />
      </ul>

      <a className="block text-blue-50 underline text-center mt-5 hover:no-underline">
        {t("seeMoreNews")} {">"}
      </a>
    </section>
  );
};

export { News };
