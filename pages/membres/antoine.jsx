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
          <div className={styles.name}>ANTOINE MERMET</div>
          <div className={styles.position}>Musicien, Compositeur</div>
          <ul className={styles.infos}>
            <li> CHROMB! / Saint Sadrill</li>
            <li>Bouche Amplifiée / Tiphaine Calmettes</li>
            <li>The Very Big Experimental Toubifri Orchestra</li>
            <li>Vocoder / Service Délicat</li>
            <li>Collectif Dur&Doux / Cie Groupe Fantomas</li>
            <li>Cie Kopfkino / Cie Connerie Nouvelle</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/antoine.jpg"
          />
        </div>
      </main>
    </div>
  );
};

export default Member;
