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
          <div className={styles.name}>ROMA BLANCHARD</div>
          <div className={styles.position}>Comédien, Drag Queen</div>
          <ul className={styles.infos}>
            <li> Conservatoire de Genève</li>
            <li>Conservatoire de Lyon</li>
            <li> Stage avec Krystian Lupa</li>
            <li> Cie Tumulte</li>
            <li>Collectif Xanadou</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/romain.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
