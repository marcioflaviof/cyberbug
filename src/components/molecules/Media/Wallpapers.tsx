import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Klimt-Judy-0e59af25_orhsuy",
    full: "/cyberbug/media/wallpapers/Klimt-Judy_fhdckq",
  },
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Edgerunners-Keyart2-053dca34_in6zqs",
    full: "/cyberbug/media/wallpapers/Edgerunners-Keyart2_ysebxw",
  },
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Edgerunners-Keyart1-9a02bc2a_nwzsdb",
    full: "/cyberbug/media/wallpapers/Edgerunners-Keyart1_rsjjvb",
  },
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Claude_Monet-NC-0f3f063b_kojiit",
    full: "/cyberbug/media/wallpapers/Claude_Monet-NC_qigtgy",
  },
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Cyberpunk2077NG_Cover_art_RGB-en_gcvelv",
    full: "/cyberbug/media/wallpapers/Cyberpunk2077NG_Cover_art_RGB-en_mnuxxd",
  },
  {
    partial:
      "/cyberbug/media/wallpapers/mini_wallpapers/Edward_Hopper-V-b252592b_bpofh2",
    full: "/cyberbug/media/wallpapers/Edward_Hopper-V_cp5dql",
  },
];

const Wallpapers = () => {
  return <Carousell images={images} />;
};

export { Wallpapers };
