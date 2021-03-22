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
    // const showId = item_id;
    return (
      <div key={index} className={styles["project-container"]}>
        <div className={styles["title"]}>
          <Link className={styles.link} href={`/spectacles/${item._id}`}>
            {item.title}
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
