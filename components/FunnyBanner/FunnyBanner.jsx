import styles from "../../styles/funnyBanner.module.scss";
// import Ticker from "react-ticker";

const FunnyBanner = () => {
  return (
    <div className={styles.container}>
      {/* <Ticker direction={"toRight"} offset={0}> */}
      {({ index }) => (
        <>
          <div className={styles.wrapper}>
            <p className={styles.p4}> / L'HOMME À LA CASQUETTE</p>
            <p className={styles.collective}>N'EST PAS LE CHEF </p>
          </div>
        </>
      )}
      {/* </Ticker> */}
    </div>
  );
};

export default FunnyBanner;
