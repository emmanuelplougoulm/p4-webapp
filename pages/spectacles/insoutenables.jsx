import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import HttpClient from "../../http/httpClient";

const Insoutenables = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={3} />
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles">
            <a className="backlink">{"< SPECTACLES"}</a>
          </Link>
        </div>
        <ProjectBanner text={`INSOUTENABLES LONGUES ÉTREINTES /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src={"/images/insoutenables.png"} alt="-" />
          <img src={"/images/insoutenables.png"} alt="-" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>INSOUTENABLES LONGUES ÉTREINTES</div>
          <div className={styles["paragraph"]}>
            <br />
            <br />
            Yvan Viripaev raconte la divagation mentale de 4 personnages a
            travers les tumultes de l'espace physique et metaphysique.
            <br />
            <br /> Percutant et poétique, d’une sincérité rare, Yvan Viripaev
            nous livre une pièce qui refuse le cynisme ambiant. C’est la
            première fois que P4 travaille sur un texte d’un auteur exterieur au
            collectif.
            <br /> <br />
            Stade embryonnaire.
            <br /> <br />
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/insoutenables.png"} alt="-" />
          <img src={"/images/insoutenables.png"} alt="-" />
        </div>{" "}
      </div>
      <div>
        <P4Banner speed={6} />
      </div>
    </div>
  );
};

export default Insoutenables;
