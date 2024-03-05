import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import HttpClient from "../../http/httpClient";

const MaSoeur = ({ showData }) => {
  const [show, setShow] = useState(showData);

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={3} />
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles" className="backlink">
            {"< SPECTACLES"}
          </Link>
        </div>
        <ProjectBanner text={`MA SOEUR, TES LÈVRES SONT DE PORCELAINE /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src={"/images/masoeur.png"} alt="-" />
          <img src={"/images/masoeur.png"} alt="-" />
          <img src={"/images/masoeur.png"} alt="-" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>
            MA SOEUR, TES LÈVRES SONT DE PORCELAINE
          </div>
          <div className={styles["paragraph"]}>
            Spectacle joué à <strong>Paris 11e (2018)</strong> et au Couvent
            Levat à <strong>Marseille (2019).</strong>
            <br />
            <iframe
              src="https://player.vimeo.com/video/509780969?h=af17331d10"
              width="510"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            Ma soeur, tes lèvres sont de porcelaine Première création immersive
            de P4 guide le spectateur dans un parcours escarpé à partir d'une
            laverie publique, point de départ d'une déambulation qui nous fait
            découvrir tour à tour les restes d’une ancienne costumerie de
            cabaret, un appartement familial, une pizzeria fermée, une chapelle
            abandonnée.
            <br />
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/masoeur.png"} alt="-" />
          <img src={"/images/masoeur.png"} alt="-" />
          <img src={"/images/masoeur.png"} alt="-" />
        </div>{" "}
      </div>
      <div>
        <P4Banner speed={6} />
      </div>
    </div>
  );
};

export default MaSoeur;
