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
          <div className={styles.name}>SARAH CALCINE</div>
          <div className={styles.position}>Comédienne, metteuse en scène</div>
          <ul className={styles.infos}>
            <li> Manufacture de Lausanne / Compagnie Boule à facettes</li>
            <li>On achève bien les oiseaux / Festival Fragments</li>
            <li>Mon petit monde porno, de Gabriel Calderón</li>
            <li>Compagnie COMPLOT (Uruguay)</li>
            <li>National d'Arts Scéniques de Montevideo</li>
            <li>Mains d'Oeuvres / Innocence de Dea Loher</li>
            <li>Festival in situ de Villeréal</li>
            <li>Talents Cannes Adami / Sacha (série Arte)</li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            layout="fill"
            className={styles.generic}
            src="/images/members/sarah.jpg"
          />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
