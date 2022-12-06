import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  "/cyberbug/media/screenshots/Cyberpunk2077-The_man_with_the_silver_hand-RGB-44d9fb97_h3ge7z",
  "/cyberbug/media/screenshots/screen-the-hottest-tech-in-town-077bcd21_q6ku2m",
  "/cyberbug/media/screenshots/screen-just-around-the-corner-388ebe74_iaaoyh",
  "/cyberbug/media/screenshots/screen-its-a-deal-47b49f75_g9rxan",
  "/cyberbug/media/screenshots/screen-high-speed-high-stakes-bc264427_tpo0fg",
  "/cyberbug/media/screenshots/Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-630611cf_asvkef",
];

const Screenshots = () => {
  return <Carousell images={images} />;
};

export { Screenshots };
