import React from "react";
import styles from "../styles/menu.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner.jsx";
import FunnyBanner from "../components//FunnyBanner/FunnyBanner.jsx";
import { useMediaQuery } from "react-responsive";
import Image from "next/legacy/image";

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
            <div className={styles["description"]}>
              Collectif tout-terrain racontant des histoires avec un filtre{" "}
              <br /> de poésie, d'humour, de rage et de folie. <br /> Pour un
              théâtre en salle et ailleurs, pour tout le monde.
            </div>
          </h3>
        </div>
        <section className={styles["section"]}>
          <div className={styles["img-container"]}>
            <img src="/images/photos/image5.jpeg" />
          </div>
          <div className={styles["nav-wrapper"]}>
            <Link className={styles["nav-item"]} href="/manifeste">
              Manifeste
            </Link>
            <Link className={styles["nav-item"]} href="/actus">
              Actualités
            </Link>
            <Link className={styles["nav-item"]} href="/spectacles/spectacles">
              Spectacles
            </Link>
            <Link className={styles["nav-item"]} href="membres/membres">
              Membres
            </Link>
            <Link className={styles["nav-item"]} href="/contact">
              Contact
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
