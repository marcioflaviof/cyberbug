import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  {
    partial:
      "/cyberbug/media/screenshots/Cyberpunk2077-The_man_with_the_silver_hand-RGB-44d9fb97_h3ge7z",
    full: "/cyberbug/media/screenshots/full-images/Cyberpunk2077-The_man_with_the_silver_hand-RGB-en_tzzj7a",
  },
  {
    partial:
      "/cyberbug/media/screenshots/screen-the-hottest-tech-in-town-077bcd21_q6ku2m",
    full: "/cyberbug/media/screenshots/full-images/screen-the-hottest-tech-in-town-en_qqrcvf",
  },
  {
    partial:
      "/cyberbug/media/screenshots/screen-just-around-the-corner-388ebe74_iaaoyh",
    full: "/cyberbug/media/screenshots/full-images/screen-just-around-the-corner-en_y1escr",
  },
  {
    partial: "/cyberbug/media/screenshots/screen-its-a-deal-47b49f75_g9rxan",
    full: "/cyberbug/media/screenshots/full-images/screen-its-a-deal-en_jczlse",
  },
  {
    partial:
      "/cyberbug/media/screenshots/screen-high-speed-high-stakes-bc264427_tpo0fg",
    full: "/cyberbug/media/screenshots/full-images/screen-high-speed-high-stakes-en_hccjeb",
  },
  {
    partial:
      "/cyberbug/media/screenshots/Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-630611cf_asvkef",
    full: "/cyberbug/media/screenshots/full-images/Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-en_djdwge",
  },
];

const Screenshots = () => {
  return <Carousell images={images} />;
};

export { Screenshots };
