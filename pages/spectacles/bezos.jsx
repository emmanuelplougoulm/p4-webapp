import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import HttpClient from "../../http/httpClient";

const Bezos = ({ showData }) => {
  const [show, setShow] = useState(showData);

  return (
    <div className={"site-wrapper"}>
      <div>
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles" className="backlink">
            {"< SPECTACLES"}
          </Link>
        </div>
        {/* TODO */}
        <ProjectBanner text={`J'AURAIS VOULU ÊTRE JEFF BEZOS /`} />
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <img src={"/images/photos/image2.jpeg"} />
          <img src={"/images/photos/image3.jpeg"} />
          <img src={"/images/photos/image2.jpeg"} />
          <img src={"/images/photos/image3.jpeg"} />
          <img src={"/images/photos/image2.jpeg"} />
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
              src="https://www.youtube.com/embed?v=MPLQDtOdZZ8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
            <br />
            <br />
            <br />
            <div>
              "Un feu d’artifice satirique et corrosif, efficace et plein de
              drôlerie."
              <br /> Piano Panier <br />
              <a
                href="http://pianopanier.com/jaurais-voulu-etre-jeff-bezos/"
                target="blank"
              >
                lire l'article
              </a>
              <br />
            </div>
            <br />
            <div>
              "Joyeux patchwork, les comédiens jonglent avec multiples genres :
              alexandrins, témoignages, pièce basculant dans le vaudeville. Avec
              humour et énergie, les comédiens nous surprennent. Pièce à
              multiples facettes, innovante et surprenante."
              <br /> État-critique <br />
              <a
                href="https://www.etat-critique.com/jaurais-voulu-etre-jeff-bezos-arthur-viadieu- 
                theatre-de-belleville/"
                target="blank"
              >
                lire l'article
              </a>
              <br />
            </div>
            <br />
            <div>
              "Quelque part entre la comédie satirique et le documentaire, la
              pièce (...) passe au crible le patron du géant Amazon et la vision
              du monde qu’il contribue à façonner. (...) De là à espérer que
              l’humanité puisse redevenir imprévisible, il n’y a qu’un pas,
              qu’Arthur Viadieu et sa troupe franchissent sans ciller.."
              <br /> Usbek & Rica <br />
              <a
                href="https://usbeketrica.com/fr/article/j-aurais-voulu-etre-jeff-bezos"
                target="blank"
              >
                lire l'article
              </a>
              <br />
            </div>
            <br />
            <div>
              ""Un texte et une mise en scène agréablement déconcertants où se
              croisent l'alexandrin, le vaudeville, l'absurde et
              l'ultra-réalisme. Cette façon ludique d'aborder une actualité qui
              devrait faire froid dans le dos, occasionne des numéros détonnants
              aux comédiens, tous inspirés et finement choisis.""
              <br /> Le journal du dimanche <br />
              {/* <a
                href="https://usbeketrica.com/fr/article/j-aurais-voulu-etre-jeff-bezos"
                target="blank"
              >
                lire l'article
              </a> */}
              <br />
            </div>
            <br />
            <div>
              "Un réquisitoire survolté porté par 5 comédiens exceptionnels
              (...) Les 5 acteurs qui interprètent tour à tour le rôle de Jeff
              Bezos mais aussi une grande variété de rôles sont tous épatants,
              de drôlerie, de justesse et de panache. Le rythme est endiablé de
              bout en bout et réserve de multiples surprises."
              <br /> Culture-Tops <br />
              {/* <a
                href="https://usbeketrica.com/fr/article/j-aurais-voulu-etre-jeff-bezos"
                target="blank"
              >
                lire l'article
              </a> */}
              <br />
            </div>
            <br />
            <div>
              "Un texte et une mise en scène totalement déjantés, servis par des
              comédiens et comédiennes diablement talentueux qui s’attachent à
              nous dérouter en permanence."
              <br /> La Souris Scène <br />
              <a
                href="https://lasouriscene.fr/theatre/jaurais-voulu-etre-jeff-bezos-2/"
                target="blank"
              >
                lire l'article
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src={"/images/photos/image2.jpeg"} />
          <img src={"/images/photos/image3.jpeg"} />
          <img src={"/images/photos/image2.jpeg"} />
          <img src={"/images/photos/image3.jpeg"} />
          <img src={"/images/photos/image2.jpeg"} />
        </div>
      </div>
    </div>
  );
};

export default Bezos;
