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
          <div className={styles.name}>Claire Olier</div>
          <div className={styles.position}>Comédienne, metteuse en scène</div>
          <ul className={styles.infos}>
            <li> Conservatoire du 11e (Paris)</li>
            <li>Cie Luce </li>
            <li>Cie 5ème acte</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/claire.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
