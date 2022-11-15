import { useTranslation } from "react-i18next";

type NewsCardType = {
  date: string;
  subtitle: string;
  link: string;
};

const NewsCard: React.FC<NewsCardType> = ({ date, subtitle, link }) => {
  const { t } = useTranslation();

  return (
    <li className="group border-gray-200 border py-5 px-7 mt-1 hover:bg-white">
      <a href={link} className="text-gray-200 group-hover:text-black">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 h-[2px] w-7 content-[''] group-hover:bg-black" />
          <div className="font-blender-bold uppercase text-[7px] tracking-[2px] group-hover:hidden">
            {date}
          </div>
          <div className="font-blender-bold uppercase text-[7px] tracking-[2px] hidden group-hover:block">
            {t("more")}
          </div>
        </div>
        <h3 className="font-blender-bold text-xl leading-4 mt-6">{subtitle}</h3>
      </a>
    </li>
  );
};

export { NewsCard };
