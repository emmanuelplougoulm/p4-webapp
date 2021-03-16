import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
// import { Link } from "react-router-dom";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
// import bezosBg from "../../Assets/bezos.png";
// import insoutenableBg from "../../Assets/insoutenables.png";
// import tailBg from "../../Assets/tail.jpg";
// import masoeurBg from "../../Assets/masoeur.png";

const Projets = () => {
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
        <header className={styles.header}>
          {/* <Link className={styles.link} to="/menu"> */}
          <div>{"< "}MENU</div>
          {/* </Link> */}
        </header>
        <div className={styles.projects}>Spectacles</div>
      </div>
      {/* <div className={styles.main}> */}
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setBezos(true)}
              onMouseLeave={() => setBezos(false)}
            >
              {/* <Link className={styles.link} to="/bezos"> */}
              J'aurais voulu être Jeff Bezos
              {/* </Link> */}
            </div>
          </div>
          <div className={styles["project-container"]}>
            <div
              className={styles["title"]}
              onMouseEnter={() => setInsoutenable(true)}
              onMouseLeave={() => setInsoutenable(false)}
            >
              {/* <Link className={styles.link} to="/insoutenables"> */}
              <div className={styles.puce}> </div>Insoutenables longues
              étreintes
              {/* </Link> */}
            </div>
            <div className={styles["detail"]}></div>
          </div>
          <div
            className={styles["project-container"]}
            onMouseEnter={() => setTail(true)}
            onMouseLeave={() => setTail(false)}
          >
            <div className={styles["title"]}>
              {/* <Link className={styles.link} to="/tail"> */}
              Seule la queue du castor peut tarir la rivière
              {/* </Link> */}
            </div>
            <div className={styles["detail"]}></div>
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
              {/* <Link className={styles.link} to="/masoeur"> */}
              Ma soeur, tes lèvres sont de porcelaine
              {/* </Link> */}
            </div>
            <div className={styles["detail"]}></div>
          </div>
        </div>
        <div className={styles["bg-container"]}>
          {/* <img
            src={findImage(isBezos, isInsoutenable, isTail, isSister)}
            alt="-"
          /> */}
        </div>
      </section>
      {/* </div> */}
      <div>
        <ProjectsBanner />
        <P4Banner />
      </div>
    </div>
  );
};

export default Projets;
