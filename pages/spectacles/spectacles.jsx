import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import Image from "next/legacy/image";
import HttpClient from "../../http/httpClient";

const Spectacles = () => {
  const history = useHistory();
  const [background, setBackground] = useState("/images/photos/image1.jpeg");

  return (
    <div className={"site-wrapper"}>
      <div>
        <div className="backlink-ctn">
          <Link href="/" className="backlink">
            {"< MENU"}
          </Link>
        </div>
        <div className="section-title">Spectacles</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/photos/image1.jpeg")}
            >
              <Link href={`/spectacles/bezos`} className={styles.link}>
                J'AURAIS VOULU ÊTRE JEFF BEZOS
              </Link>
            </div>

            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/door.png")}
            >
              <Link href={`/spectacles/door`} className={styles.link}>
                LE DERNIER FERME LA PORTE
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/tail.png")}
            >
              <Link href={`/spectacles/tail`} className={styles.link}>
                SEULE LA QUEUE DU CASTOR PEUT TARIR LA RIVIÈRE
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/masoeur.png")}
            >
              <Link href={`/spectacles/soeur`} className={styles.link}>
                MA SOEUR, TES LÈVRES SONT DE PORCELAINE
              </Link>
            </div>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/insoutenables.png")}
            >
              <Link href={`/spectacles/insoutenables`} className={styles.link}>
                INSOUTENABLES LONGUES ÉTREINTES
              </Link>
            </div>
          </div>
        </div>

        <div className={styles["bg-container"]}>
          <Image src={background} layout="fill" alt="-" />
        </div>
      </main>
    </div>
  );
};

export default Spectacles;
