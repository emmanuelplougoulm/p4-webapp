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
        <P4Banner speed={3} />
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
              src="https://www.youtube.com/embed/s_3wlp-bXSI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            Jeff Bezos et Amazon sont en mission. Une mission dont les contours
            sont mystérieux, mais qui englobe la robotique, les outils de
            machine Learning, l’intelligence artificielle et la conquête de
            l’espace. La création d’un monde nouveau en somme, empreint de
            l’imaginaire libertarien américain. Jeff Bezos ne cache pas ses
            ambitions. Il prône l’audace face au risque de stagnation. Il oppose
            la stase à la croissance. Un raisonnement froid, glacial issu de
            l’univers triste rempli de calculs et de données compilées sur nos
            existences. La promesse est un monde boursouflé de technologies
            ludiques et fascinantes promettant la nouveauté renouvelée sans
            cesse. Un monde de surveillance aussi, pour apprendre davantage de
            nous et pour faire le Bien.
            <br />
            <br /> Travailler sur Jeff Bezos et Amazon ouvre un réseau de
            galeries infini et tentaculaire. Il faut donc faire des choix. Nous
            prenons le parti d’en rire. Du sourire au grincement de dent. La
            richesse de Jeff vient de notre mode de vie, de notre docilité et de
            notre fascination pour le monde des marchandises. Son génie réside
            dans son idée de réduire au maximum le temps entre la naissance
            d’une pulsion consumériste et sa satisfaction concrète. Nous poser
            en victimes est simpliste, « Je ne suis pas responsable de ta
            paresse, je ne suis pas responsable de ton renoncement, Je n’ai pas
            ouvert la brèche : j’exploite la faille » (extrait du texte) et il
            faut questionner les responsabilités individuelles et collectives.
            <br /> <br />
            Dans un monde où nous sommes, à des dégrés différents, prolétarisés,
            Jeff est le surnageant, le techno-prophète qui va tous nous sauver.
            <br /> <br />
            J’aurais voulu être Jeff Bezos est certes un titre sarcastique, mais
            il reflète aussi une soif qui sommeille en nous de réussite totale,
            d’ambition démesurée, d’hubris déchaînée, un désir de monstruosité.
            Un paradoxe finalement. Un choix aussi. Celui de devenir des tumeurs
            cherchant l’immortalité ou de rester dans l’immuable beauté des
            cellules souches.
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/bezos.gif"} />
          <img src={"/images/bezos.gif"} />
        </div>
      </div>
      <div>
        <P4Banner speed={6} />
      </div>
    </div>
  );
};

export default Bezos;
