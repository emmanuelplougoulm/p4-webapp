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
      {!isMobile && <header className="header"></header>}
      <main className={styles.main}>
        <div className={styles["upper-section"]}>
          {/*<P4Banner />*/}
          <h1 className={styles.h1}>
            <div className={styles.montserrat}>Collectif</div>
            <div className={styles.lato}>P4</div>
          </h1>
          <h3>
            {/*TODO*/}
            <div className={styles.montserrat}>
              Collectif tout-terrain racontant des histoires avec un filtre de
              poésie, d'humour, de rage et de folie.Pour un théâtre en salle et
              ailleurs, pour tout le monde.
            </div>
          </h3>
        </div>
        <section className={styles["section"]}>
          <div className={styles["img-container"]}>
            <Image src="/images/photos/image5.jpeg" layout="fill" alt="" />
          </div>
          <div className={styles["nav-wrapper"]}>
            <Link href="/spectacles/spectacles">
              <a className={styles["nav-item"]}>Spectacles</a>
            </Link>
            <Link href="membres/membres">
              <a className={styles["nav-item"]}>Membres</a>
            </Link>
            <Link href="/actus">
              <a className={styles["nav-item"]}>Actualités</a>
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
