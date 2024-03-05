import React, { useEffect, useState } from "react";
import styles from "../styles/actus.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner";
import Image from "next/image";
import HttpClient from "../http/httpClient";

const Actus = () => {
  const [news, setNews] = useState([]);

  const newsList = news.map((item, index) => {
    return (
      <div key={index} className={styles["post-container"]}>
        <div className={styles["title"]}>{item.title}</div>
        <div className={styles["detail"]}>{item.detail}</div>
        <div className={styles["date"]}>{item.date}</div>
      </div>
    );
  });

  return (
    <div className={"site-wrapper"}>
      <div>
        {/* <P4Banner /> */}
        <div className="backlink-ctn">
          <Link className="backlink" href="/">
            {"< MENU"}
          </Link>
        </div>
        <div className="section-title">Actualités</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["post-container"]}>
            <div>
              Avignon 2024 - Le 11 25 mai 2024 : Festival de Coye-la-forêt
              Février et Octobre 2023 : Théâtre de Belleville Création in situ &
              immersive :  Avril 24 : Théâtre de l'Oeuvre - Marseille Juillet
              2024 : Avignon 2024 à suivre
            </div>
            <div className={styles["title"]}>
              * Nouvelle création Immersive en cours
            </div>
            <div className={styles["detail"]}> France / été 2022</div>
          </div>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>* Chantiers Divers et Variés.</div>
          </div>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>
              * J’aurais voulu être Jeff Bezos{" "}
            </div>
            <div className={styles["detail"]}>
              {" "}
              se jouera au théâtre de Belleville en février 2023.
            </div>
            <div className={styles["detail"]}>
              {" "}
              + Mention spéciale du jury Prix Jeunes metteurs en scène du
              Théâtre 13 2021 
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Image src="/images/actualites.jpg" layout="fill" />
        </div>
      </main>
      {/* <P4Banner /> */}
    </div>
  );
};

export default Actus;
