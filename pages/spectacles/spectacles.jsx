import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

const Spectacles = () => {
  const history = useHistory();
  const [background, setBackground] = useState("/images/bezos.png");

  useEffect(() => {
    const findImage = (background) => {
      if ((background = "bezos")) return "/images/bezos.png";
      if ((background = "insoutenable")) return "/images/insoutenables.png";
      if ((background = "tail")) return "/images/tail.png";
      if ((background = "sister")) return "/images/masoeur.png";
      else return "/images/bezos.png";
    };
  }, [background]);

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={7} />
        <div className="backlink-ctn">
          <Link href="/menu">
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
              onMouseEnter={() => setBackground("/images/bezos.png")}
            >
              <Link href="/bezos">
                <a className={styles.link}>J'aurais voulu être Jeff Bezos</a>
              </Link>
            </div>
          </div>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBackground("/images/insoutenables.png")}
            >
              <Link href="/insoutenables">
                <a className={styles.link}>Insoutenables longues étreintes </a>
              </Link>
            </div>
          </div>
          <div
            className={styles["project-container"]}
            onMouseEnter={() => setBackground("/images/tail.png")}
          >
            <div className={styles["title"]}>
              <Link href="/tail">
                <a className={styles.link}>
                  Seule la queue du castor peut tarir la rivière
                </a>
              </Link>
            </div>
          </div>
          <div
            className={styles["project-container"]}
            onMouseEnter={() => setBackground("/images/masoeur.png")}
          >
            <div className={styles["title"]}>
              <Link href="/masoeur">
                <a className={styles.link}>
                  Ma soeur, tes lèvres sont de porcelaine
                </a>
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
