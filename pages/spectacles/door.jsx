import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import HttpClient from "../../http/httpClient";

const Door = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={3} />
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles">
            <a className="backlink">{"< SPECTACLES"}</a>
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
            <strong>Marseille – Août 2021</strong>
            <br />
            <iframe
              width="510"
              height="315"
              src="https://www.youtube.com/embed/J0eeaM7c6kg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
          <img src="/images/door.png" alt="-" />
        </div>{" "}
      </div>
      <div>
        <P4Banner speed={6} />
      </div>
    </div>
  );
};

export default Door;
