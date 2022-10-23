import { ReactElement } from "react";

type DiscordType = {
  classes?: string;
};

const Discord = ({ classes }: DiscordType): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill-rule="evenodd"
        fill="rgb(0, 0, 0)"
        d="M21.929,24.435 L20.200,22.923 L18.371,21.316 L19.129,23.814 L2.929,23.814 C1.314,23.814 -0.000,22.572 -0.000,21.033 L-0.000,2.781 C-0.000,1.242 1.314,0.000 2.929,0.000 L22.071,0.000 C23.686,0.000 25.000,1.242 25.000,2.781 L25.000,27.000 L21.929,24.435 ZM18.871,7.709 C16.814,6.250 14.857,6.291 14.857,6.291 L14.657,6.507 C17.086,7.209 18.214,8.221 18.214,8.221 C16.729,7.452 15.271,7.074 13.914,6.925 C12.886,6.818 11.900,6.845 11.029,6.952 C10.943,6.952 10.871,6.966 10.786,6.980 C10.286,7.020 9.071,7.196 7.543,7.830 C7.014,8.059 6.700,8.221 6.700,8.221 C6.700,8.221 7.886,7.155 10.457,6.453 L10.314,6.291 C10.314,6.291 8.357,6.250 6.300,7.709 C6.300,7.709 4.243,11.232 4.243,15.579 C4.243,15.579 5.443,17.536 8.600,17.631 C8.600,17.631 9.129,17.023 9.557,16.511 C7.743,15.998 7.057,14.917 7.057,14.917 C7.057,14.917 7.200,15.012 7.457,15.147 C7.471,15.161 7.486,15.174 7.514,15.188 C7.557,15.214 7.600,15.228 7.643,15.255 C8.000,15.444 8.357,15.592 8.686,15.714 C9.271,15.930 9.971,16.146 10.786,16.295 C11.857,16.484 13.114,16.551 14.486,16.308 C15.157,16.200 15.843,16.011 16.557,15.727 C17.057,15.552 17.614,15.295 18.200,14.931 C18.200,14.931 17.486,16.038 15.614,16.537 C16.043,17.050 16.557,17.631 16.557,17.631 C19.714,17.536 20.929,15.579 20.929,15.579 C20.929,11.232 18.871,7.709 18.871,7.709 ZM15.129,14.324 C14.329,14.324 13.671,13.648 13.671,12.825 C13.671,12.001 14.314,11.326 15.129,11.326 C15.943,11.326 16.586,12.001 16.586,12.825 C16.586,13.648 15.943,14.324 15.129,14.324 ZM9.914,14.324 C9.114,14.324 8.457,13.648 8.457,12.825 C8.457,12.001 9.100,11.326 9.914,11.326 C10.729,11.326 11.386,12.001 11.371,12.825 C11.371,13.648 10.729,14.324 9.914,14.324 Z"
      />
    </svg>
  );
};

export { Discord };
