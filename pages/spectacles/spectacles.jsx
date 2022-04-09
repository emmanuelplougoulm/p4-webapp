import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import HttpClient from "../../http/httpClient";

const Spectacles = () => {
  const history = useHistory();
  const [background, setBackground] = useState("/images/bezos.gif");

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={7} />
        <div className="backlink-ctn">
          <Link href="/">
            <a className="backlink">{"< MENU"}</a>
          </Link>
        </div>
        <div className="section-title">Spectacles</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/bezos.gif")}
            >
              <Link href={`/spectacles/bezos`}>
                <a className={styles.link}>J'AURAIS VOULU ÊTRE JEFF BEZOS</a>
              </Link>
            </div>

            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/door.png")}
            >
              <Link href={`/spectacles/door`}>
                <a className={styles.link}>LE DERNIER FERME LA PORTE</a>
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/tail.png")}
            >
              <Link href={`/spectacles/tail`}>
                <a className={styles.link}>
                  SEULE LA QUEUE DU CASTOR PEUT TARIR LA RIVIÈRE
                </a>
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/masoeur.png")}
            >
              <Link href={`/spectacles/soeur`}>
                <a className={styles.link}>
                  MA SOEUR, TES LÈVRES SONT DE PORCELAINE
                </a>
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/insoutenables.png")}
            >
              <Link href={`/spectacles/insoutenables`}>
                <a className={styles.link}>INSOUTENABLES LONGUES ÉTREINTES</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles["bg-container"]}>
          <Image src={background} layout="fill" alt="-" />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Spectacles;
