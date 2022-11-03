import { useTranslation } from "react-i18next";
import { Discord } from "src/components/atoms/icons/Discord/Discord";
import { Facebook } from "src/components/atoms/icons/Facebook/Facebook";
import { Forums } from "src/components/atoms/icons/Forums/Forums";
import { Instagram } from "src/components/atoms/icons/Instagram/Instagram";
import { Tumblr } from "src/components/atoms/icons/Tumblr/Tumblr";
import { Twitch } from "src/components/atoms/icons/Twitch/Twitch";
import { Twitter } from "src/components/atoms/icons/Twitter/Twitter";
import { Youtube } from "src/components/atoms/icons/Youtube/Youtube";

enum ICON_SIZE {
  small = "h-7 w-7",
}

const socialMedias = [
  {
    name: "youtube",
    component: <Youtube className={ICON_SIZE.small} />,
    link: "https://youtube.com/user/CyberPunkGame",
  },
  {
    name: "facebook",
    component: <Facebook className={ICON_SIZE.small} />,
    link: "https://www.facebook.com/CyberpunkGame",
  },
  {
    name: "twitter",
    component: <Twitter className={ICON_SIZE.small} />,
    link: "http://twitter.com/cyberpunkgame",
  },
  {
    name: "forums",
    component: <Forums />,
    link: "https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/",
  },
  {
    name: "discord",
    component: <Discord className={ICON_SIZE.small} />,
    link: "https://discord.gg/cyberpunkgame",
  },
  {
    name: "instagram",
    component: <Instagram className={ICON_SIZE.small} />,
    link: "https://www.instagram.com/cyberpunkgame/",
  },
  {
    name: "tumblr",
    component: <Tumblr className="w-4 h-6" />,
    link: "https://cyberpunkgame.tumblr.com/",
  },
  {
    name: "twitch",
    component: <Twitch className={ICON_SIZE.small} />,
    link: "https://www.twitch.tv/cdprojektred",
  },
];

const Medias = () => {
  const { t } = useTranslation();

  return (
    <>
      <span className="font-bold mb-2">{t("findus")}</span>
      <ul className="flex flex-wrap justify-around w-full p-3">
        {socialMedias.map(({ name, component, link }) => (
          <li
            key={name}
            className="flex basis-1/3 justify-center items-center mb-5"
          >
            <a href={link}>{component}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Medias };
