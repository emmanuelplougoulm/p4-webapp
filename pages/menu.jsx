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
    <div className="site-wrapper">
      <header className="header">
        <Link href="/">
          <a className="header-link">Fermer</a>
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles["upper-section"]}>
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
            <Link href="/manifeste">
              <a className={styles["nav-item"]}>Manifeste</a>
            </Link>
            <Link href="/spectacles/spectacles">
              <a className={styles["nav-item"]}>Spectacles</a>
            </Link>
            <Link href="/actus">
              <a className={styles["nav-item"]}>Actualités</a>
            </Link>
            <Link href="membres/membres">
              <a className={styles["nav-item"]}>Membres</a>
            </Link>
            <Link href="/contact">
              <a className={styles["nav-item"]}>Contact</a>
            </Link>
          </div>
        </section>
      </main>
      <footer className={styles["footer"]}>
        <div className={styles["copyright"]}>@ 2020 - P4 collectif</div>
      </footer>
    </div>
  );
};

export default Menu;
