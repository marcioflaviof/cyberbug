import { ReactElement } from "react";
import Styles from "./Twitter.module.scss";

type TwitterType = {
  classes?: string;
};

const Twitter = ({ classes }: TwitterType): ReactElement => {
  return (
    <svg
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 56 56"
      className={`${Styles.twitter} ${classes}`}
    >
      <path d="M52.3,12.8c-1.8,0.8-3.7,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.2-3.1  c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C19.8,19.8,12.5,15.9,7.7,10c-0.8,1.5-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.4,8.2  c-1.6-0.1-3.1-0.5-4.5-1.2c0,0,0,0.1,0,0.1c0,4.8,3.4,8.7,7.9,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2  c1.3,3.9,4.9,6.7,9.2,6.8c-3.4,2.6-7.6,4.2-12.2,4.2c-0.8,0-1.6,0-2.3-0.1c4.4,2.8,9.5,4.4,15.1,4.4c18.1,0,28-15,28-28  c0-0.4,0-0.9,0-1.3C49.3,16.5,51,14.7,52.3,12.8z" />
    </svg>
  );
};

export { Twitter };
