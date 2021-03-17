import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import Link from "next/link";

// import bezosBg from "../../Assets/bezos.png";
// import insoutenableBg from "../../Assets/insoutenables.png";
// import tailBg from "../../Assets/tail.jpg";
// import masoeurBg from "../../Assets/masoeur.png";

const Spectacles = () => {
  const history = useHistory();
  const [background, setBackground] = useState("bg-bezos");
  const [isBezos, setBezos] = useState(false);
  const [isInsoutenable, setInsoutenable] = useState(false);
  const [isTail, setTail] = useState(false);
  const [isSister, setSister] = useState(false);

  useEffect(() => {
    if (isBezos) setBackground("bg-bezos");
    if (isInsoutenable) setBackground("bg-insoutenables");
    if (isTail) setBackground("bg-tail");
    if (isSister) setBackground("bg-sister");
  }, [isBezos, isInsoutenable, isTail, isSister]);

  // const findImage = (isBezos, isInsoutenable, isTail, isSister) => {
  //   if (isBezos) return bezosBg;
  //   if (isInsoutenable) return insoutenableBg;
  //   if (isTail) return tailBg;
  //   if (isSister) return masoeurBg;
  //   else return bezosBg;
  // };

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
              onMouseEnter={() => setBezos(true)}
              onMouseLeave={() => setBezos(false)}
            >
              <Link href="/bezos">
                <a className={styles.link}>J'aurais voulu être Jeff Bezos</a>
              </Link>
            </div>
          </div>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setInsoutenable(true)}
              onMouseLeave={() => setInsoutenable(false)}
            >
              <Link href="/insoutenables">
                <a className={styles.link}>Insoutenables longues étreintes </a>
              </Link>
            </div>
          </div>
          <div
            className={styles["project-container"]}
            onMouseEnter={() => setTail(true)}
            onMouseLeave={() => setTail(false)}
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
            onMouseEnter={() => setSister(true)}
            onMouseLeave={() => setSister(false)}
          >
            <div
              className={styles["title"]}
              onClick={() => history.push("/masoeur")}
            >
              <Link href="/masoeur">
                <a className={styles.link}>
                  Ma soeur, tes lèvres sont de porcelaine
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["bg-container"]}>
          {/* <img
            src={findImage(isBezos, isInsoutenable, isTail, isSister)}
            alt="-"
          /> */}
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Spectacles;
