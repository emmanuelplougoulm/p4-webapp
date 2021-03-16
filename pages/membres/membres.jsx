import React from "react";
import Link from "next/link";
import styles from "../../styles/membres.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";

const Members = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner />
        <header className={styles.header}>
          {/* <Link className={styles.link} to="/menu"> */}
          <div>{"< "}MENU</div>
          {/* </Link> */}
        </header>
      </div>
      <main className={styles.main}>
        <div className={styles.title}>Membres : </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/chloe" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Chloé Chycki / &nbsp; </div>
            <div className={styles["item-role"]}> Comédienne, clown</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/pauline" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>
              Pauline Laurendeau / &nbsp;{" "}
            </div>
            <div className={styles["item-role"]}> Comédienne, musicienne</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/mathias" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Mathias Minne / &nbsp; </div>
            <div className={styles["item-role"]}> Comédien, réalisateur</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/arthur" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Arthur Viadieu / &nbsp; </div>
            <div className={styles["item-role"]}> Comédien</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/romain" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>
              Romain Blanchard / &nbsp;{" "}
            </div>
            <div className={styles["item-role"]}> Comédien</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/marieline" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>
              Marie-Line Vergnaux / &nbsp;{" "}
            </div>
            <div className={styles["item-role"]}>
              {" "}
              Comédienne, metteuse en scène
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/bob" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Bob Levasseur / &nbsp; </div>
            <div className={styles["item-role"]}> Comédien</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/benjamin" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Benjamin Kühn / &nbsp; </div>
            <div className={styles["item-role"]}> Comédien, réalisateur</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/anais" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Anaïs Ancel / &nbsp; </div>
            <div className={styles["item-role"]}> Comédienne, clown</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/lison" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Lison Rault / &nbsp; </div>
            <div className={styles["item-role"]}> Comédienne</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/regis" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Régis Fortino / &nbsp; </div>
            <div className={styles["item-role"]}> Comédien</div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/sarah" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Sarah Calcine / &nbsp; </div>
            <div className={styles["item-role"]}>
              {" "}
              Comédienne, metteuse en scène
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["item-container"]}>
            {/* <Link to="/member/antoine" className={styles["name-container"]}> */}
            <div className={styles["item-name"]}>Antoine Mermet / &nbsp; </div>
            <div className={styles["item-role"]}> musicien, compositeur</div>
            {/* </Link> */}
          </div>
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Members;
