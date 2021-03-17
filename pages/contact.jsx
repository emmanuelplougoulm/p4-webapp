import React from "react";
import styles from "../styles/contact.module.scss";
import P4Banner from "../components/P4Banner/P4Banner";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className={"site-wrapper"}>
      <P4Banner />
      <main className={styles.main}>
        {!isMobile && (
          <>
            <div className={styles.left}>
              <div className={styles.fat}> email </div>
              <div className={styles.link}>
                <a href="mailto:associationp4@gmail">
                  {" "}
                  associationp4@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.fat}> téléphone </div>
              <div>
                {" "}
                06 99 90 04 74&nbsp;<strong>/</strong> &nbsp;07 69 18 94 49
              </div>
            </div>
          </>
        )}
        {isMobile && (
          <div className={styles.main}>
            <div className={styles.top}>
              <div className={styles.fat}> email </div>
              <div className={styles.link}>
                <a href="mailto:associationp4@gmail">
                  {" "}
                  associationp4@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.fat}> téléphone </div>
              <div>
                06 99 90 04 74&nbsp;<strong>/</strong> &nbsp;07 69 18 94 49
              </div>
            </div>
          </div>
        )}
      </main>
      <P4Banner />
    </div>
  );
};

export default Contact;
