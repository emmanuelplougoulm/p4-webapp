import styles from "./P4Banner.module.scss";
import Ticker from "react-ticker";

const P4Banner = ({ speed }) => {
  return (
    <div className={styles.container}>
      <Ticker speed={speed}>
        {({ index }) => (
          <>
            <div className={styles.wrapper}>
              <p className={styles.p4}> P4</p>
              <p className={styles.collective}>COLLECTIF</p>
            </div>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default P4Banner;
