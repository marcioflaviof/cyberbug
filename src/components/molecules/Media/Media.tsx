"use client";

import { useState } from "react";

import { SectionTitle } from "@atoms/SectionTitle/SectionTitle";

import { ConceptArt } from "./ConceptArt";
import { MediaButton } from "./MediaButton";
import { Screenshots } from "./Screenshots";
import { Videos } from "./Videos";
import { Wallpapers } from "./Wallpapers";

const medias = [
  { type: "videos", component: <Videos /> },
  {
    type: "screenshots",
    component: <Screenshots />,
  },
  { type: "wallpapers", component: <Wallpapers /> },
  { type: "conceptArt", component: <ConceptArt /> },
];

const Media = () => {
  const [media, setMedia] = useState(medias[0]);
  return (
    <section className="flex flex-col items-center h-full w-full bg-black px-4">
      <SectionTitle title="Media" />
      <div className="text-gray-200 font-blender-bold flex flex-wrap max-w-xl w-full  px-4">
        <MediaButton
          title="Videos"
          active={media.type === "videos"}
          onClick={() => setMedia(medias[0])}
        />
        <MediaButton
          title="Screenshots"
          active={media.type === "screenshots"}
          roundedBorder="topRight"
          onClick={() => setMedia(medias[1])}
        />
        <MediaButton
          title="Wallpapers"
          active={media.type === "wallpapers"}
          roundedBorder="bottonLeft"
          onClick={() => setMedia(medias[2])}
        />
        <MediaButton
          title="Concept Art"
          active={media.type === "conceptArt"}
          onClick={() => setMedia(medias[3])}
        />
      </div>
      {media.component}
    </section>
  );
};

export { Media };
