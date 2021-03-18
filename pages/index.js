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
            {/* LEFT PART */}
            {!left ? (
              <Link href="/menu">
                <div style={{ textAlign: "center" }}>
                  <div className={styles["montserrat-home"]}>
                    <div className="hoverable">P4</div>
                  </div>
                  <div className={styles["lato-home"]}>
                    <div className="hoverable">COLLECTIF</div>
                  </div>
                </div>
              </Link>
            ) : (
              <Link href="/menu">
                <div className={styles.leftImage}>
                  <Image
                    src="/images/home-left.png"
                    layout="fill"
                    alt="left-img"
                  />
                </div>
              </Link>
            )}
          </div>
          {/* RIGHT PART */}
          <div className={styles.right}>
            {right ? (
              <Link href="/menu">
                <div>
                  <Image src="/images/home-right.png" layout="fill" alt="" />
                </div>
              </Link>
            ) : (
              <Link href="/menu">
                <div style={{ textAlign: "center" }}>
                  <div className={styles["lato-home"]}>
                    <div className={styles.hoverable}>THÉATRE &</div>
                  </div>
                  <div className={styles["montserrat-home"]}>
                    <div className={styles.hoverable}> IMMERSION</div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </main>
      )}
      {/* MOBILE PART */}
      {isMobile && (
        <Link href="/menu">
          <div className={styles["home-mobile"]}>
            <div className={styles["montserrat-mobile"]}>P4</div>
            <div className={styles["lato-mobile"]}>COLLECTIF</div>
          </div>
        </Link>
      )}
      <P4Banner speed={6} />
    </div>
  );
}
