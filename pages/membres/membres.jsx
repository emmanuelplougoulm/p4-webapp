import React from "react";
import Link from "next/link";
import styles from "../../styles/membres.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";

const Members = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        {/* <P4Banner /> */}
        <div className="backlink-ctn">
          <Link href="/">
            <a className="backlink">{"< MENU"}</a>
          </Link>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.title}>Membres : </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/chloe">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Chloé Chycki / &nbsp; </div>
              <div className={styles["item-role"]}> Comédienne, clown</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/pauline">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Pauline Laurendeau / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédienne, musicienne</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/mathias">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Mathias Minne / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien, réalisateur</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/arthur">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Arthur Viadieu / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/romain">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Romain Blanchard / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/marieline">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Marie-Line Vergnaux / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}>
                {" "}
                Comédienne, metteuse en scène
              </div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/bob">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Bob Levasseur / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/anais">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Anaïs Ancel / &nbsp; </div>
              <div className={styles["item-role"]}> Comédienne, clown</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/claire">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Claire Olier / &nbsp; </div>
              <div className={styles["item-role"]}>
                {" "}
                Comédienne, metteuse en scène
              </div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/regis">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Régis Fortino / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/sarah">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Sarah Calcine / &nbsp; </div>
              <div className={styles["item-role"]}>
                {" "}
                Comédienne, metteuse en scène
              </div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/antoine">
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Antoine Mermet / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> musicien, compositeur</div>
            </div>
          </Link>
        </div>
      </main>
      {/* <P4Banner /> */}
    </div>
  );
};

export default Members;
