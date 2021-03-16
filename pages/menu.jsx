import React from "react";
import styles from "../styles/menu.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner.jsx";
import FunnyBanner from "../components//FunnyBanner/FunnyBanner.jsx";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Menu = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className={"site-wrapper"}>
      {/* <div className={styles.container}> */}
      <header className={styles.header}>
        <Link className={styles.link} href="/">
          Fermer
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles["top-section"]}>
          <P4Banner />
          <h1 className={styles.h1}>
            <div className={styles.montserrat}>P4 </div>
            <div className={styles.lato}>collectif</div>
          </h1>
          <P4Banner />
          {!isMobile && <FunnyBanner />}
        </div>
        <section className={styles["section"]}>
          <div className={styles["img-container"]}>
            <Image src="/entrance.png" width={"100%"} height={"100%"} alt="" />
          </div>
          <div className={styles["nav-wrapper"]}>
            <Link className={styles["nav-item"]} href="/manifeste">
              <span>Manifeste</span>
            </Link>
            <Link className={styles["nav-item"]} href="/spectacles/spectacles">
              <span>Spectacles</span>
            </Link>
            <Link className={styles["nav-item"]} href="/actus">
              <span>Actualités</span>
            </Link>
            <Link className={styles["nav-item"]} href="membres/membres">
              <span>Membres</span>
            </Link>
            <Link className={styles["nav-item"]} href="/contact">
              <span>Contact</span>
            </Link>
          </div>
        </section>
      </main>
      <footer className={styles["footer"]}>
        <div className={styles["copyright"]}>@ 2020 - P4 collectif</div>
      </footer>
    </div>
    // </div>
  );
};

export default Menu;
