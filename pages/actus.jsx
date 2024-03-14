import React, { useEffect, useState } from "react";
import styles from "../styles/actus.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner";
import Image from "next/legacy/image";
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
        <div className="backlink-ctn">
          <Link className="backlink" href="/" legacyBehavior>
            {"< MENU"}
          </Link>
        </div>
        <div className="section-title">Actualités</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>
              J'aurais voulu être Jeff Bezos
            </div>
            <div className={styles["detail"]}> Avignon 2024: Théâtre le 11</div>
            <div className={styles["detail"]}>
              {" "}
              Juin 2024 - Théâtre de l'oeuvre Marseille
            </div>
            <div className={styles["detail"]}>
              {" "}
              25 mai 2024: Festival de Coye-la-forêt
            </div>
            <div className={styles["detail"]}>
              {" "}
              Février et Octobre 2023 : Théâtre de Belleville
            </div>
          </div>
          <div className={styles["post-container"]}>
            <div className={styles["title"]}>Création in situ & immersive</div>
            <div className={styles["detail"]}>
              Avril 24 : Théâtre de l'Oeuvre - Marseille
            </div>
            <div className={styles["detail"]}>
              Juillet 24: Avignon 2024 a suivre.
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img src="/images/photos/guili.jpg" layout="fill" />
        </div>
      </main>
    </div>
  );
};

export default Actus;
