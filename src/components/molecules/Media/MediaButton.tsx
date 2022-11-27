import { classNames } from "src/utils/utils";

type MediaButtonProps = {
  title: string;
  active?: boolean;
  roundedBorder?: "topRight" | "bottonLeft";
};

const MediaButton = ({ title, active, roundedBorder }: MediaButtonProps) => {
  return (
    <button
      className={classNames(
        "border-2 border-gray-200 relative text-sm uppercase flex-grow max-w-[50%] w-full h-14 tracking-[2px]",
        active ? "bg-gray-200 text-black" : "bg-black text-gray-200"
      )}
    >
      <div
        className={classNames(
          roundedBorder === "topRight" &&
            "absolute h-[18px] w-[18px] -top-[9px] -right-[9px] bg-black border-b-2 border-gray-200 rotate-45 content-['']",
          roundedBorder === "bottonLeft" &&
            "absolute h-[18px] w-[18px] -bottom-[9px] -left-[9px] bg-black border-t-2 border-gray-200 rotate-45 content-['']"
        )}
      />
      {title}
    </button>
  );
};

export { MediaButton };
