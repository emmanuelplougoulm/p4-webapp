import React from "react";
import Link from "next/link";
import styles from "../../styles/membres.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";

const Members = () => {
  return (
    <div className={"site-wrapper"}>
      <div>
        <div className="backlink-ctn">
          <Link href="/" className="backlink">
            {"< MENU"}
          </Link>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.title}>Membres : </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/chloe" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Chloé Chycki / &nbsp; </div>
              <div className={styles["item-role"]}> Comédienne, clown</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/pauline" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Pauline Laurendeau / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédienne, musicienne</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/mathias" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Mathias Minne / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien, réalisateur</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/arthur" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Arthur Viadieu / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/romain" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Roma Blanchard / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/marieline" legacyBehavior>
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
          <Link href="/membres/bob" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Bob Levasseur / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/anais" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Anaïs Ancel / &nbsp; </div>
              <div className={styles["item-role"]}> Comédienne, clown</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/claire" legacyBehavior>
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
          <Link href="/membres/regis" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>Régis Fortino / &nbsp; </div>
              <div className={styles["item-role"]}> Comédien</div>
            </div>
          </Link>
        </div>
        <div className={styles["list-container"]}>
          <Link href="/membres/sarah" legacyBehavior>
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
          <Link href="/membres/antoine" legacyBehavior>
            <div className={styles["item-container"]}>
              <div className={styles["item-name"]}>
                Antoine Mermet / &nbsp;{" "}
              </div>
              <div className={styles["item-role"]}> musicien, compositeur</div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Members;
