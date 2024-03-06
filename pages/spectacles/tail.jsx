import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";

const Tail = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        {/* <P4Banner speed={3} /> */}
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles" className="backlink">
            {"< SPECTACLES"}
          </Link>
        </div>
        <ProjectBanner text={`INSOUTENABLES LONGUES ÉTREINTES /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src={"/images/tail.png"} alt="-" />
          <img src={"/images/tail.png"} alt="-" />
          <img src={"/images/tail.png"} alt="-" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>
            SEULE LA QUEUE DU CASTOR PEUT TARIR LA RIVIÈRE
          </div>
          <div className={styles["paragraph"]}>
            CREATION COLLECTIVE IN SITU ET IMMERSIVE - &nbsp;
            <strong>Juillet 2020</strong> <br />
            <iframe
              src="https://player.vimeo.com/video/505564858?h=eabd48ad22"
              width="100%"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            Invité en résidence pour le festival « ITINERAIRE BIS » de la
            fontaine Minérale, P4 crée et joue ce spectacle en Juillet 2020.
            Masqué, le public suit Charlie, jeune femme venant s’installer dans
            une communauté New Age des années 80. Une déambulation joyeusement
            foutraque, parfois glauque mais toujours amusante dans des lieux
            aussi éclectiques que magnifiques : bar, rivière, chapiteau
            déglingué, camping abandonné, chemins sinueux, voiture, vieux
            camping car et forêt.
            <br />
            <br />
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/tail.png"} alt="-" />
          <img src={"/images/tail.png"} alt="-" />
          <img src={"/images/tail.png"} alt="-" />
        </div>{" "}
      </div>
      <div>{/* <P4Banner speed={6} /> */}</div>
    </div>
  );
};

export default Tail;
