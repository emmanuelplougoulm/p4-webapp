import React from "react";
import styles from "../styles/manifeste.module.scss";
// import { Link } from "react-router-dom";
import P4Banner from "../components/P4Banner/P4Banner";
import ManifesteBanner from "../components/ManifesteBanner/manifesteBanner.jsx";
import { useMediaQuery } from "react-responsive";

const Manifeste = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className={styles.container}>
      <div>
        <P4Banner />
        <header className={styles.header}>
          {/* <Link className={styles.link} to="/menu"> */}
          {"<"} MENU
          {/* </Link> */}
        </header>
      </div>
      <section className={styles.section}>
        {!isMobile && (
          <div className={styles.left}>
            <ManifesteBanner />
            <ManifesteBanner direction={"invert"} />
            <ManifesteBanner />
            <ManifesteBanner direction={"invert"} />
            <ManifesteBanner />
          </div>
        )}
        <div className={styles.right}>
          <div className={styles.title}>Manifeste :</div>
          <div className={styles.paragraph}>
            "Le fossé entre le théâtre pauvre et le théâtre riche s'est encore
            élargi. La classe moyenne du théâtre disparaît; un peu d’argent ne
            suffit plus, il en faut beaucoup ou alors quoi, Rien? Il faut
            trouver l’esthétique de ce rien. Qui n’est pas du tout Rien,
            puisqu’il y a les acteurs, porteurs de la totalité des signes du
            spectacle."" <i>A.Vitez</i>
            <br />
            <br />
            P4 crée des spectacles et les joue dans des salles ou en dehors, en
            forme classique ou immersive.
            <br />
            <br />
            P4, c’est la joyeuse entropie.
            <br />
            <br />
            Le vertige du vide et l’urgence fabriquent nos spectacles.
            <br />
            <br />
            P4 croit fermement à la confrontation d’idées, à la bienveillance et
            à l’exigence.
            <br />
            <br />
            P4 n’a pas d’autre ligne éditoriale que la projection des désirs,
            formulés, enfouis ou à venir de ses membres.
            <br />
            <br />
            Pour ses créations <strong>IN SITU</strong> et{" "}
            <strong> IMMERSIVES</strong>, le <strong>Collectif P4</strong> se
            rassemble lors de temps courts et intenses pour jouer rapidement sur
            les lieux qui l’acceuillent.
          </div>
        </div>
      </section>
      <P4Banner />
    </div>
  );
};

export default Manifeste;
