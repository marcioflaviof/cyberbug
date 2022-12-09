import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  {
    partial:
      "/cyberbug/media/concept-art/Cyberpunk2077_All_ready_to_go-RGB-6e22cda2_jq4shs",
    full: "/cyberbug/media/concept-art/full-images/Cyberpunk2077_All_ready_to_go-RGB-en_dl0dk6",
  },
  {
    partial:
      "/cyberbug/media/concept-art/Cyberpunk2077_I_make_my_own_rules-RGB-c5ddee9d_mmizqo",
    full: "/cyberbug/media/concept-art/full-images/Cyberpunk2077_I_make_my_own_rules-RGB-en_uvylwl",
  },
  {
    partial:
      "/cyberbug/media/concept-art/Cyberpunk2077_Jacked_in-RGB-5e655727_xmlkji",
    full: "/cyberbug/media/concept-art/full-images/Cyberpunk2077_Jacked_in-RGB-en_qixqdz",
  },
  {
    partial:
      "/cyberbug/media/concept-art/Cyberpunk2077_Smoke_and_mirrors-RGB-332ad09b_sftvac",
    full: "/cyberbug/media/concept-art/full-images/Cyberpunk2077_Smoke_and_mirrors-RGB-en_ok4qsk",
  },
];

export type ImageType = typeof images;

const ConceptArt = () => {
  return <Carousell images={images} />;
};

export { ConceptArt };
