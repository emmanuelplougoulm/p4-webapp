import React, { useState, useEffect } from "react";
import styles from "../../styles/singlemember.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import Members from "./membres.json";

const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner />
        <header className="backlink-ctn">
          <Link href="/membres/membres" className="backlink">
            {"< "}MEMBRES
          </Link>
        </header>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.name}>MARIE-LINE VERGNAUX</div>
          <div className={styles.position}>Comédienne, Metteuse en scène</div>
          <ul className={styles.infos}>
            <li> Licence Art du Spectacle</li>
            <li>Ecole les Enfants Terribles (Paris)</li>
            <li> Conservatoire du 11e (Paris)</li>
            <li> Cie Bacchus</li>
            <li>Cie Luce</li>
            <li>Mise en scène : Quelqu’un pour veiller sur moi</li>
            <li>2h14 Mention Spéciale Prix Théâtre 13 2016</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/marieline.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
