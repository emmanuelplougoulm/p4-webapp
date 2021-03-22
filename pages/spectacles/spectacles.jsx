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
  const [shows, setShows] = useState([]);
  const [activeShow, setActiveShow] = useState("");
  const [background, setBackground] = useState("/images/bezos.png");

  const findImage = () => {
    if (activeShow.includes("BEZOS")) setBackground("/images/bezos.png");
    if (activeShow.includes("INSOUTENABLES"))
      setBackground("/images/insoutenables.png");
    if (activeShow.includes("CASTOR")) setBackground("/images/tail.png");
    if (activeShow.includes("SOEUR")) setBackground("/images/masoeur.png");
    else return;
  };

  useEffect(() => {
    findImage();
  }, [activeShow]);

  async function fetchShows() {
    const result = await HttpClient.get("/api/show");
    setShows(result.data);
  }

  useEffect(() => {
    try {
      fetchShows();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const showList = shows.map((item, index) => {
    return (
      <div key={index} className={styles["project-container"]}>
        <div
          className={styles["title"]}
          onMouseEnter={() => setActiveShow(item.title)}
        >
          <Link href={`/spectacles/${item._id}`}>
            <a className={styles.link}>{item.title}</a>
          </Link>
        </div>
      </div>
    );
  });

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
        <div className={styles.left}>{showList}</div>
        <div className={styles["bg-container"]}>
          <Image src={background} layout="fill" alt="-" />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Spectacles;
