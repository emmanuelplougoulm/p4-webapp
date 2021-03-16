import Head from "next/head";
import styles from "../styles/home.module.scss";
import React, { useState } from "react";
import P4Banner from "../components/P4Banner/P4Banner.jsx";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [left, toggleLeft] = useState(false);
  const [right, toggleRight] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const history = useHistory();

  return (
    <div className={"site-wrapper"}>
      <Head>
        <title>P4-collectif</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <P4Banner speed={3} />
      {!isMobile && (
        <main className={styles.main}>
          <Link href="/menu">
            <div
              className={styles.left}
              onMouseEnter={() => {
                toggleLeft(!left);
                toggleRight(!right);
              }}
              onMouseLeave={() => {
                toggleLeft(!left);
                toggleRight(!right);
              }}
            >
              {!left ? (
                <div>
                  <div className={styles.montserrat}>
                    <div className={styles.hoverable}>P4</div>
                  </div>
                  <div className={styles.lato}>
                    <div className={styles.hoverable}>COLLECTIF</div>
                  </div>
                </div>
              ) : (
                <div className={styles.leftImage}>
                  <Image
                    src="/home-left-hover.png"
                    width={"50%"}
                    height={"100%"}
                    alt=""
                  />
                </div>
              )}
            </div>
          </Link>

          <Link href="/menu">
            <div
              className={styles.right}
              onMouseEnter={() => {
                toggleRight(!right);
                toggleLeft(!left);
              }}
              onMouseLeave={() => {
                toggleRight(!right);
                toggleLeft(!left);
              }}
            >
              {right ? (
                <div className={styles.rightImage}></div>
              ) : (
                <>
                  <div className={styles.lato}>
                    <div className={styles.hoverable}>THÉATRE &</div>
                  </div>
                  <div className={styles.montserrat}>
                    <div className={styles.hoverable}> IMMERSION</div>
                  </div>
                </>
              )}
            </div>
          </Link>
        </main>
      )}
      {isMobile && (
        <div
          className={styles["home-mobile"]}
          onClick={() => history.push("/menu")}
        >
          <div className={styles["montserrat-mobile"]}>P4</div>
          <div className={styles["lato-mobile"]}>COLLECTIF</div>
        </div>
      )}
      <P4Banner speed={6} />
    </div>
  );
}
