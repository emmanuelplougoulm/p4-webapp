import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import HttpClient from "../../http/httpClient";

const Bezos = ({ showData }) => {
  const [show, setShow] = useState(showData);

  return (
    <div className={"site-wrapper"}>
      <div>
        {/* <P4Banner speed={3} /> */}
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles">
            <a className="backlink">{"< SPECTACLES"}</a>
          </Link>
        </div>
        <ProjectBanner text={`J'AURAIS VOULU ÊTRE JEFF BEZOS /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src={"/images/bezos.gif"} />
          <img src={"/images/bezos.gif"} />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>J'AURAIS VOULU ÊTRE JEFF BEZOS</div>
          <div className={styles["paragraph"]}>
            Mention spéciale du jury Prix Jeunes metteurs en scène du Théâtre 13
            - &nbsp;
            <strong>2021</strong> <br />
            <br />
            <iframe
              width="510"
              height="315"
              src="https://www.youtube.com/watch?v=MPLQDtOdZZ8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            Jeff Bezos est le fondateur d’Amazon. Derrière la vitrine d’un
            service satisfaisant instantanément n’importe quelle pulsion
            consumériste se cache un empire technologique inédit. De
            l’intelligence artificielle à la robotique en passant par « le
            divertissement à l’infini » et la conquête spatiale, Jeff Bezos est
            un homme très occupé. A la croisée du Saturday night live et du
            théâtre contestataire, J'aurais voulu être Jeff Bezos est un
            tourbillon satirique et festif qui s’appuie sur des faits
            documentés. Alexandrins, théâtre de boulevard, et autres surprises
            viennent distiller une réflexion corrosive autour de cet inquiétant
            personnage et son hydre tentaculaire.
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/photos/image2.jpeg"} />
          <img src={"/images/photos/image3.jpeg"} />
        </div>
      </div>
      <div>{/* <P4Banner speed={6} /> */}</div>
    </div>
  );
};

export default Bezos;
