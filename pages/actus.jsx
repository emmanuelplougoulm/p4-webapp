import React from "react";
import styles from "../styles/actus.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner";
import Image from "next/image";

const Actus = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner />
        <div className="backlink-ctn">
          <Link href="/menu">
            <a className="backlink">{"< MENU"}</a>
          </Link>
        </div>
        <div className="section-title">Actualités</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>
              Nouveau spectacle IMMERSIF – Résidence de création
            </div>
            <div className={styles["detail"]}>
              Couvent Levat/Ateliers JUXTAPOZ – Marseille
              <br />
              Avril, Mai 2021
            </div>
          </div>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>
              J’aurais voulu être Jeff Bezos
            </div>
            <div className={styles["detail"]}>
              Concours Jeunes metteurs en scène Théâtre 13 <br /> 2021
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image src="/images/actualites.jpg" layout="fill" />
        </div>
      </main>

      <P4Banner />
    </div>
  );
};

export default Actus;
