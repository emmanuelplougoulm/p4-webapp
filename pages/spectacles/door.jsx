import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import HttpClient from "../../http/httpClient";

const Door = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        {/* <P4Banner speed={3} /> */}
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles" className="backlink">
            {"< SPECTACLES"}
          </Link>
        </div>
        <ProjectBanner text={`LE DERNIER FERME LA PORTE /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>LE DERNIER FERME LA PORTE</div>
          <div className={styles["paragraph"]}>
            Le couvent Levat – Spectacle joué à
            <strong> Marseille – Août 2021</strong>
            <br />
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/J0eeaM7c6kg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <div>
              Une élue à la culture accueille le public venu voir la nouvelle
              création du collectif. Le spectacle n'est pas prêt. Elle est
              kidnappée pour être offerte en sacrifice. La troupe est en fait
              une secte complètement givrée. Un couvent, un jardin, des
              couloirs, une chapelle.
            </div>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
        </div>{" "}
      </div>
      <div>{/* <P4Banner speed={6} /> */}</div>
    </div>
  );
};

export default Door;
