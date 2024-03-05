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
          <div className={styles.name}>CHLOÉ CHYCKI</div>
          <div className={styles.position}>Comédienne, clown</div>
          <ul className={styles.infos}>
            <li> Licence Histoire de l’art option Art du spectacle</li>
            <li>Studio Muller (Paris)</li>
            <li> Conservatoire 11e arrondissement (Paris)</li>
            <li> Cie le Vélo volé</li>
            <li> Cie Luce</li>
            <li> Cie la Valise ondulatoire</li>
            <li> Cie les sbires sibériens</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/chloe.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
