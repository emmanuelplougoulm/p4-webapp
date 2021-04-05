import React, { useState, useEffect } from "react";
import styles from "../../styles/singleSpectacle.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import HttpClient from "../../http/httpClient";

const Spectacle = ({ showData }) => {
  const router = useRouter();
  const { showId } = router.query;
  const [show, setShow] = useState(showData);
  const [background, setBackground] = useState("/images/bezos-1.png");

  useEffect(() => {
    if (show) {
      if (show.title.includes("BEZOS")) setBackground("/images/bezos-1.png");
      if (show.title.includes("INSOUTENABLES"))
        setBackground("/images/insoutenables-project.png");
      if (show.title.includes("CASTOR"))
        setBackground("/images/tail-project.png");
      if (show.title.includes("SOEUR"))
        setBackground("/images/sister-project.png");
    }
  }, [show]);

  async function fetchShow() {
    const result = await HttpClient.get(`/api/show/${showId}`);
    setShow(result.data);
  }

  useEffect(() => {
    try {
      if (showId !== undefined) {
        fetchShow();
      }
    } catch (e) {
      console.error(e);
    }
  }, [showId]);

  return (
    <div className={"site-wrapper"}>
      <div>
        <P4Banner speed={3} />
        <div className="backlink-ctn">
          <Link href="/spectacles/spectacles">
            <a className="backlink">{"< SPECTACLES"}</a>
          </Link>
        </div>
        {show && (
          <ProjectBanner text={show !== undefined && `${show.title} /`} />
        )}
      </div>
      <div className={styles.main}>
        <div className={styles["img-container"]}>
          <Image src={background} layout="fill" alt="-" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>
            {show !== undefined && show.title}
          </div>
          <div className={styles["paragraph"]}>
            {show !== undefined && show.detail}
            <strong>{show !== undefined && show.date}</strong> <br />
            <br />
            {show !== undefined && show.paragraph1}
            <br />
            <br /> {show !== undefined && show.paragraph2}
            <br /> <br />
            {show !== undefined && show.paragraph3}
            <br /> <br />
            {show !== undefined && show.paragraph4}
            {show && show.title.includes("CASTOR") && (
              <iframe
                src="https://player.vimeo.com/video/505564858"
                // width="640"
                // height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
            {show && show.title.includes("SOEUR") && (
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/509780969"
                // width="640"
                // height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
        <div className={styles["img-container"]}>
          <Image src={background} layout="fill" alt="-" />
        </div>{" "}
      </div>
      <div>
        <P4Banner speed={6} />
      </div>
    </div>
  );
};

export default Spectacle;
