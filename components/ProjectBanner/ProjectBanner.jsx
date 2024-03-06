import React from "react";
import styles from "../../styles/projectBanner.module.scss";
// import Ticker from "react-ticker";
import Marquee from "react-fast-marquee";

const ProjectBanner = ({ text }) => {
  return (
    <div className={styles.container}>
      <Marquee autoFill>
        <div className={styles.wrapper}>
          <p className={styles.text}> {text}</p>
        </div>
      </Marquee>
    </div>
  );
};

export default ProjectBanner;
