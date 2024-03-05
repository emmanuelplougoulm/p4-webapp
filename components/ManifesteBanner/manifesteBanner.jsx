import React from "react";
import styles from "../../styles/manifesteBanner.module.scss";
// import Ticker from "react-ticker";

// interface IProps {
//   direction?: string;
// }

// const ProjectBanner: React.FC<IProps> = ({ direction }: IProps) => {
const MBanner = ({ direction }) => {
  return (
    <div className={styles.container}>
      {/* <Ticker
        mode="chain"
        offset="-5"
        speed={5}
        direction={direction === "invert" ? "toRight" : "toLeft"}
      >
        {({ index }) => (
          <div className={styles.wrapper}>
            <p className={styles.text}> Manifeste </p>
          </div>
        )}
      </Ticker> */}
    </div>
  );
};

export default MBanner;
