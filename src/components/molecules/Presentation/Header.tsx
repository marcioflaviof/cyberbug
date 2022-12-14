import { ColoredBar } from "@atoms/icons/ColoredBar/ColoredBar";
import { Mail } from "@atoms/icons/Mail/Mail";

const Header = () => {
  return (
    <a
      href="https://www.cyberpunk.net/en/phantom-liberty"
      className="flex relative bg-green-100 items-center h-[63px] w-full pr-6"
    >
      <div className="max-w-[130px]">
        <ColoredBar />
      </div>
      <h3 className=" uppercase text-[18px] leading-5">
        <div className="flex">
          <Mail className="pr-1 mt-1" />
          sign up for cyberpunk 2077:{" "}
        </div>
        <span className="font-blender-bold">news! {">"}</span>
      </h3>
    </a>
  );
};

export { Header };
