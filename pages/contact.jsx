import React from "react";
import styles from "../styles/contact.module.scss";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className={"site-wrapper"}>
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
              <div className={styles.fat}> instagram </div>
              <div className={styles.link}>
                <a href="https://www.instagram.com/collectifp4/">
                  {" "}
                  https://www.instagram.com/collectifp4/
                </a>
              </div>
              <div className={styles.fat}> Artistique </div>
              <div>
                {" "}
                Arthur Viadieu 06 99 90 04 74&nbsp;<strong>/</strong> Bob
                Levasseur &nbsp;07 69 18 94 49
              </div>
            </div>
            <div className={styles.right}>
              
              <div className={styles.fat}> Diffusion </div>
              <div className={styles.fat}> Accueil pro </div>
              <div className={styles.link}>
                <a href="mailto:associationp4@gmail">
                  {" "}
                  Houria Djelallil 06 42 45 56 99 <strong>/</strong> &nbsp;
                  houria.diff@gmail.com
                </a>
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
              <div className={styles.fat}> email </div>
              <div className={styles.link}>
                <a href="https://www.instagram.com/collectifp4/">
                  {" "}
                  https://www.instagram.com/collectifp4/
                </a>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.fat}> téléphone </div>
              <div>
                Arthur Viadieu 06 99 90 04 74&nbsp;<strong>/</strong> Bob
                Levasseur &nbsp;07 69 18 94 49
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Contact;
