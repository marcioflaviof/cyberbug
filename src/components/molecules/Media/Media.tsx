import { SectionTitle } from "@atoms/SectionTitle/SectionTitle";
import { MediaButton } from "./MediaButton";

const Media = () => {
  return (
    <section className="h-full w-full bg-black pb-4 px-4">
      <SectionTitle title="Media" />
      <div className="text-gray-200 font-blender-bold flex flex-wrap justify-center max-w-xl w-full">
        <MediaButton title="Videos" active />
        <MediaButton title="Screenshots" roundedBorder="topRight" />
        <MediaButton title="Wallpapers" roundedBorder="bottonLeft" />
        <MediaButton title="Concept Art" />
      </div>
    </section>
  );
};

export { Media };
