import { IconType } from "../iconTypes";

const World = ({ className, small }: IconType) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      className={`${className} ${small ? "h-7 w-7" : null}`}
    >
      <path
        fillRule="evenodd"
        fill="rgb(0, 0, 0)"
        d="M27.272,4.727 C30.290,7.745 31.952,11.757 31.952,16.024 C31.952,20.291 30.290,24.303 27.272,27.321 C24.255,30.338 20.243,32.000 15.976,32.000 C11.708,32.000 7.697,30.338 4.679,27.321 C1.661,24.303 -0.000,20.291 -0.000,16.024 C-0.000,11.757 1.661,7.745 4.679,4.727 C7.697,1.710 11.708,0.048 15.976,0.048 C20.243,0.048 24.255,1.710 27.272,4.727 ZM25.860,25.909 C27.828,23.941 29.136,21.490 29.676,18.823 C29.255,19.443 28.853,19.672 28.604,18.287 C28.348,16.028 26.273,17.471 24.968,16.668 C23.596,17.594 20.510,14.869 21.034,17.942 C21.843,19.328 25.402,16.087 23.628,19.020 C22.496,21.067 19.490,25.602 19.881,27.952 C19.930,31.376 16.382,28.666 15.159,27.530 C14.337,25.255 14.879,21.278 12.728,20.164 C10.394,20.063 8.391,19.850 7.486,17.241 C6.942,15.374 8.066,12.595 10.066,12.166 C12.995,10.326 14.040,14.321 16.787,14.395 C17.640,13.503 19.964,13.219 20.157,12.218 C18.355,11.901 22.443,10.704 19.984,10.022 C18.628,10.182 17.754,11.429 18.475,12.486 C15.847,13.099 15.762,8.683 13.236,10.076 C13.172,12.278 9.110,10.789 11.831,10.343 C12.765,9.934 10.306,8.751 11.635,8.966 C12.287,8.931 14.485,8.161 13.890,7.643 C15.113,6.884 16.141,9.462 17.339,7.584 C18.203,6.141 16.976,5.874 15.893,6.606 C15.282,5.922 16.971,4.444 18.462,3.806 C18.958,3.593 19.433,3.477 19.795,3.510 C20.546,4.377 21.934,4.527 22.007,3.406 C20.148,2.515 18.098,2.045 15.976,2.045 C12.930,2.045 10.032,3.013 7.635,4.803 C8.279,5.098 8.645,5.466 8.024,5.936 C7.542,7.373 5.586,9.302 3.867,9.028 C2.975,10.567 2.388,12.261 2.137,14.037 C3.576,14.513 3.907,15.456 3.598,15.771 C2.865,16.410 2.414,17.316 2.182,18.308 C2.651,21.174 3.997,23.815 6.091,25.909 C8.732,28.549 12.242,30.003 15.976,30.003 C19.710,30.003 23.220,28.549 25.860,25.909 Z"
      />
    </svg>
  );
};

export { World };
