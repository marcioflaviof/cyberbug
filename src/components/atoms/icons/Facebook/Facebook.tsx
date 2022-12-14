import { IconType } from "../iconTypes";

const Facebook = ({ className, small }: IconType) => {
  return (
    <svg
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 56 56"
      className={`${className} ${small ? "h-7 w-7" : null}`}
    >
      <path d="M39.1,19.4h-7.6v-5c0-1.9,1.2-2.3,2.1-2.3H39V3.8l-7.4,0c-8.2,0-10.1,6.2-10.1,10.1v5.5h-4.8v8.5h4.8v24.1h10  c0,0,0-13.3,0-24.1h6.8L39.1,19.4z" />
    </svg>
  );
};

export { Facebook };
