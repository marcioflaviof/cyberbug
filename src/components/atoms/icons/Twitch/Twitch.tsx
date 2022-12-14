import { IconType } from "../iconTypes";

const Twitch = ({ className, small }: IconType) => {
  return (
    <svg
      viewBox="0 0 34 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${small ? "h-7 w-7" : null}`}
    >
      <path
        d="M7.375 0.444336L0.5 7.31934V32.0693H8.75V38.9443L15.625 32.0693H21.125L33.5 19.6943V0.444336H7.375ZM30.75 18.3193L25.25 23.8193H19.75L14.9375 28.6318V23.8193H8.75V3.19434H30.75V18.3193Z"
        fill="black"
      />
      <path d="M26.625 8.00684H23.875V16.2568H26.625V8.00684Z" fill="black" />
      <path
        d="M19.0625 8.00684H16.3125V16.2568H19.0625V8.00684Z"
        fill="black"
      />
    </svg>
  );
};

export { Twitch };
