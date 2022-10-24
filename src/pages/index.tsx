import { NextPage } from "next";
import Head from "next/head";

import { Alienware } from "src/atoms/icons/Alienware/Alienware";
import { Discord } from "src/atoms/icons/Discord/Discord";
import { Facebook } from "src/atoms/icons/Facebook/Facebook";
import { Forums } from "src/atoms/icons/Forums/Forums";
import { Instagram } from "src/atoms/icons/Instagram/Instagram";
import { Nvidia } from "src/atoms/icons/Nvidia/Nvidia";
import { Tumblr } from "src/atoms/icons/Tumblr/Tumblr";
import { Twitch } from "src/atoms/icons/Twitch/Twitch";
import { Twitter } from "src/atoms/icons/Twitter/Twitter";
import { Youtube } from "src/atoms/icons/Youtube/Youtube";
import { Footer } from "src/components/molecules/Footer/Footer";

enum ICON_SIZE {
  small = "h-7 w-7",
}

const socialMedias = [
  {
    name: "youtube",
    component: <Youtube classes={ICON_SIZE.small} />,
    link: "https://youtube.com/user/CyberPunkGame",
  },
  {
    name: "facebook",
    component: <Facebook classes={ICON_SIZE.small} />,
    link: "https://www.facebook.com/CyberpunkGame",
  },
  {
    name: "twitter",
    component: <Twitter classes={ICON_SIZE.small} />,
    link: "http://twitter.com/cyberpunkgame",
  },
  {
    name: "forums",
    component: <Forums />,
    link: "https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/",
  },
  {
    name: "discord",
    component: <Discord classes={ICON_SIZE.small} />,
    link: "https://discord.gg/cyberpunkgame",
  },
  {
    name: "instagram",
    component: <Instagram classes={ICON_SIZE.small} />,
    link: "https://www.instagram.com/cyberpunkgame/",
  },
  {
    name: "tumblr",
    component: <Tumblr classes="w-4 h-6" />,
    link: "https://cyberpunkgame.tumblr.com/",
  },

  {
    name: "tumblr",
    component: <Twitch classes={ICON_SIZE.small} />,
    link: "https://cyberpunkgame.tumblr.com/",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CyberBug 2022</title>
        <meta name="description" content="Copy of cyberpunk 2077 homepage" />
      </Head>

      <main>
        <div className="bg-yellow">
          <section className="flex flex-col items-center mb-10">
            <ul className="flex flex-col gap-4 text-center text-black mb-2">
              <li>
                <a className="font-pro-bold">
                  Terms of User & Privacy Policy {"<"}
                </a>
              </li>
              <li>
                <a className="font-pro-bold">Careers {"<"}</a>
              </li>
              <li>
                <a className="font-pro-bold">User agreement {"<"}</a>
              </li>
              <li>
                <a className="font-pro-bold">Fan Content Guidelines {"<"}</a>
              </li>
              <li className="font-bold">Find us on</li>
            </ul>
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
          </section>
          <section className="flex flex-col items-center gap-5">
            <Alienware classes="max-w-60" />
            <Nvidia classes="max-w-45" />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
