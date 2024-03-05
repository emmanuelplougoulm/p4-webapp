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
          <div className={styles.name}>Anaïs Ancel</div>
          <div className={styles.position}>Comédienne, clown</div>
          <ul className={styles.infos}>
            <li> Studio Alain de Bock</li>
            <li> Cie Les épis noirs</li>
            <li> Cie du Crayon</li>
            <li> Thermos</li>
            <li> Arzapar</li>
            <li> Cie Sans soucis</li>
            <li> Viva</li>
            <li> Electre des bas-fonds Simon Abkarian</li>
          </ul>
        </div>
        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/anais.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
