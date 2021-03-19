import React, { useEffect, useState } from "react";
import styles from "../styles/actus.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner";
import Image from "next/image";
import HttpClient from "../http/httpClient";

const Actus = () => {
  const [news, setNews] = useState([]);

  async function fetchNews() {
    const result = await HttpClient.get("/api/news");
    setNews(result.data);
  }

  useEffect(() => {
    try {
      fetchNews();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const newsList = news.map((item, index) => {
    return (
      <div key={index} className={styles["post-container"]}>
        <div className={styles["title"]}>{item.title}</div>
        <div className={styles["detail"]}>{item.detail}</div>
        <div className={styles["date"]}>{item.date}</div>
      </div>
    );
  });

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner />
        <div className="backlink-ctn">
          <Link href="/menu">
            <a className="backlink">{"< MENU"}</a>
          </Link>
        </div>
        <div className="section-title">Actualités</div>
      </div>

      <main className={styles.main}>
        <div className={styles.left}>{newsList}</div>
        <div className={styles.right}>
          <Image src="/images/actualites.jpg" layout="fill" />
        </div>
      </main>
      <P4Banner />
    </div>
  );
};

export default Actus;
