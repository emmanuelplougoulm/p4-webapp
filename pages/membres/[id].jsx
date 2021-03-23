import React, { useState, useEffect } from "react";
import styles from "../../styles/singlemember.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Members from "./membres.json";

import pictureAnais from "../../public/images/members/anais.jpg";
import pictureArthur from "../../public/images/members/arthur.jpg";
import pictureBenjamin from "../../public/images/members/benjamin.jpg";
import pictureBob from "../../public/images/members/bob.jpg";
import pictureChloe from "../../public/images/members/chloe.jpg";
import pictureLison from "../../public/images/members/lison.jpg";
import pictureMarieLine from "../../public/images/members/marieline.jpg";
import pictureMathias from "../../public/images/members/mathias.jpg";
import picturePauline from "../../public/images/members/pauline.jpg";
import pictureRegis from "../../public/images/members/regis.jpg";
import pictureRomain from "../../public/images/members/romain.jpg";
import pictureAntoine from "../../public/images/members/antoine.jpg";
import pictureSarah from "../../public/images/members/sarah.jpg";

const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  const findImage = (id) => {
    if (id === "anais") return pictureAnais;
    if (id === "arthur") return pictureArthur;
    if (id === "benjamin") return pictureBenjamin;
    if (id === "bob") return pictureBob;
    if (id === "chloe") return pictureChloe;
    if (id === "lison") return pictureLison;
    if (id === "marieline") return pictureMarieLine;
    if (id === "mathias") return pictureMathias;
    if (id === "pauline") return picturePauline;
    if (id === "regis") return pictureRegis;
    if (id === "romain") return pictureRomain;
    if (id === "antoine") return pictureAntoine;
    if (id === "sarah") return pictureSarah;
  };

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner />
        <header className="backlink-ctn">
          <Link href="/membres/membres">
            <a className="backlink">{"< "}MEMBRES</a>
          </Link>
        </header>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.name}>{Members[id]?.name}</div>
          <div className={styles.position}>{Members[id]?.position}</div>
          <ul className={styles.infos}>
            {Members[id]?.infos.map((element) => (
              <li>{element} </li>
            ))}
            {id === "mathias" && (
              <a
                href="https://vimeo.com/mathiasminne"
                style={{
                  color: "black",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Vimeo
              </a>
            )}
            {id === "antoine" && (
              <a
                href="http://www.antoinemermet.net/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                www.antoinemermet.net
              </a>
            )}
            {id === "sarah" && (
              <a
                href="https://vimeo.com/341345889"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Bande démo
              </a>
            )}
          </ul>
        </div>
        <div className={styles.right}>
          <img className={styles.generic} src={findImage(id)} alt="" />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Member;
