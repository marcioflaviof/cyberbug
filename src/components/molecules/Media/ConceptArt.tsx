import { Carousell } from "@atoms/Carousell/Carousell";

const images = [
  "/cyberbug/media/concept-art/Cyberpunk2077_All_ready_to_go-RGB-6e22cda2_jq4shs",
  "/cyberbug/media/concept-art/Cyberpunk2077_I_make_my_own_rules-RGB-c5ddee9d_mmizqo",
  "/cyberbug/media/concept-art/Cyberpunk2077_Jacked_in-RGB-5e655727_xmlkji",
  "/cyberbug/media/concept-art/Cyberpunk2077_Smoke_and_mirrors-RGB-332ad09b_sftvac",
];

const ConceptArt = () => {
  return <Carousell images={images} />;
};

export { ConceptArt };
