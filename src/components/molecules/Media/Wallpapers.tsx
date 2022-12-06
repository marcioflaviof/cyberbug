import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  "/cyberbug/media/wallpapers/mini_wallpapers/Klimt-Judy-0e59af25_orhsuy",
  "/cyberbug/media/wallpapers/mini_wallpapers/Edgerunners-Keyart2-053dca34_in6zqs",
  "/cyberbug/media/wallpapers/mini_wallpapers/Edgerunners-Keyart1-9a02bc2a_nwzsdb",
  "/cyberbug/media/wallpapers/mini_wallpapers/Claude_Monet-NC-0f3f063b_kojiit",
  "/cyberbug/media/wallpapers/mini_wallpapers/Cyberpunk2077NG_Cover_art_RGB-en_gcvelv",
  "/cyberbug/media/wallpapers/mini_wallpapers/Edward_Hopper-V-b252592b_bpofh2",
];

const Wallpapers = () => {
  return <Carousell images={images} />;
};

export { Wallpapers };
