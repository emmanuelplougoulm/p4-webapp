import React from "react";
import styles from "../../styles/projectBanner.module.scss";
import Ticker from "react-ticker";

// interface IProps {
//   text?: string;
// }

// const ProjectBanner: React.FC<IProps> = ({ text }: IProps) => {
const ProjectBanner = ({ text }) => {
  return (
    <div className={styles.container}>
      <Ticker>
        {({ index }) => (
          <>
            <div className={styles.wrapper}>
              <p className={styles.text}> {text}</p>
            </div>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default ProjectBanner;
