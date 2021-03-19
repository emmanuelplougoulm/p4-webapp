import { useEffect, useState } from "react";
import styles from "../styles/admin.module.scss";
// import Api from "../../Axios/api";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [shows, setShows] = useState([]);
  const [news, setNews] = useState([]);
  const [login, setLogin] = useState("");
  const [isAuth, setAuth] = useState(false);

  const [showTitle, setShowTitle] = useState("");
  const [showDate, setDate] = useState("");
  const [showDetail, setDetail] = useState("");
  const [showParagraph1, setShowParagraph1] = useState("");
  const [showParagraph2, setShowParagraph2] = useState("");
  const [showParagraph3, setShowParagraph3] = useState("");
  const [showParagraph4, setShowParagraph4] = useState("");

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDetail, setNewsDetail] = useState("");
  const [newsDate, setNewsDate] = useState("");

  const notify = (key) => {
    if (key === "success-create") {
      toast("L'ajout a marché !");
    }
    if (key === "error-create") {
      toast("L'ajout a foiré !");
    }
    if (key === "success-delete") {
      toast("La suppression a marché !");
    }
    if (key === "error-delete") {
      toast("La suppression a foirée !");
    }
  };

  //   async function fetchNews() {
  //     const result = await Api.get("news");
  //     setNews(result.data);
  //   }

  //   useEffect(() => {
  //     try {
  //       fetchNews();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }, []);

  //   async function fetchShows() {
  //     const result = await Api.get("shows");
  //     setShows(result.data);
  //   }

  //   useEffect(() => {
  //     try {
  //       fetchShows();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }, []);

  const createShow = () => {
    Api.post("/shows", {
      title: showTitle,
      date: showDate,
      detail: showDetail,
      paragraph1: showParagraph1,
      paragraph2: showParagraph2,
      paragraph3: showParagraph3,
      paragraph4: showParagraph4,
    })
      .then((res) => {
        if (res.status === 200) {
          notify("success-create");
        }
        fetchShows();
      })
      .catch((err) => console.log(err.toJSON()));
  };

  const deleteShow = (id) => {
    Api.delete(`/shows/${id}`).then((res) => {
      if (res.status === 200) {
        notify("success-delete");
      }
      fetchShows();
    });
  };

  const createNews = () => {
    Api.post("/news", {
      title: newsTitle,
      detail: newsDetail,
      date: newsDate,
    }).then((res) => {
      if (res.status === 200) {
        notify("success-create");
      }
      fetchNews();
    });
  };

  const deleteNews = (id) => {
    Api.delete(`/news/${id}`).then((res) => {
      if (res.status === 200) {
        notify("success-delete");
      }
      fetchNews();
    });
  };

  const handleLogin = () => {
    if (login === "monde-nouveau") {
      setAuth(true);
    }
  };

  const showList = shows.map((item, index) => {
    return (
      <div key={index} className={styles["list-item"]}>
        <div>{item.title}</div>
        <div className={styles["button"]} onClick={() => deleteShow(item._id)}>
          Supprimer
        </div>
      </div>
    );
  });

  const newsList = news.map((item, index) => {
    return (
      <div key={index} className={styles["list-item"]}>
        <div>{item.title}</div>
        <div className={styles["button"]} onClick={() => deleteNews(item._id)}>
          Supprimer
        </div>
      </div>
    );
  });

  return (
    <div className={"site-wrapper"}>
      {!isAuth && (
        <div className={styles["login-container"]}>
          <div className={styles["duo"]}>
            <label
              style={{ marginBottom: "5px", fontWeight: "bolder" }}
              htmlFor="title"
            >
              Mot magique:{" "}
            </label>
            <input
              onChange={(event) => setLogin(event.target.value)}
              type="text"
              name="title"
              id="title"
              required
            />
            <div className={styles["button"]} onClick={() => handleLogin()}>
              Valider{" "}
            </div>
          </div>
        </div>
      )}

      {isAuth && (
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles["list-container"]}>
              <div
                style={{
                  marginBottom: "20px",
                  fontSize: "14px",
                  fontWeight: "bolder",
                }}
              >
                Liste des spectacles :
              </div>
              <div>{showList}</div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "14px",
                fontWeight: "bolder",
              }}
            >
              Ajouter un spectacle :
            </div>
            <div className={styles["top-section"]}>
              <div className={styles["duo"]}>
                <label htmlFor="title">Titre: </label>
                <input
                  onChange={(event) => setShowTitle(event.target.value)}
                  type="text"
                  name="title"
                  id="title"
                  required
                />
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="title">Date: </label>
                <input
                  onChange={(event) => setDate(event.target.value)}
                  type="text"
                  name="date"
                  id="date"
                  required
                />
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="title">Détail: </label>
                <input
                  onChange={(event) => setDetail(event.target.value)}
                  type="text"
                  name="detail"
                  id="detail"
                  required
                />
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <div className={styles["duo"]}>
                <label htmlFor="paragraph">Paragraphe 1: </label>
                <textarea
                  onChange={(event) => setShowParagraph1(event.target.value)}
                  id="paragraph"
                ></textarea>
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="paragraph">Paragraphe 2: </label>
                <textarea
                  onChange={(event) => setShowParagraph2(event.target.value)}
                  id="paragraph"
                ></textarea>
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="paragraph">Paragraphe 3: </label>
                <textarea
                  onChange={(event) => setShowParagraph3(event.target.value)}
                  id="paragraph"
                ></textarea>
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="paragraph">Paragraphe 4: </label>
                <textarea
                  onChange={(event) => setShowParagraph4(event.target.value)}
                  id="paragraph"
                ></textarea>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div className={styles["create"]} onClick={() => createShow()}>
                  Ajouter{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles["list-container"]}>
              <div
                style={{
                  marginBottom: "20px",
                  fontSize: "14px",
                }}
              >
                Liste des actualités :
              </div>
              <div>{newsList}</div>
            </div>
            <div style={{ marginTop: "20px" }}>Ajouter une actualité :</div>
            <div style={{ paddingTop: "20px" }}>
              <div className={styles["duo"]}>
                <label htmlFor="newsTitle">Titre: </label>
                <input
                  onChange={(event) => setNewsTitle(event.target.value)}
                  type="text"
                  name="newsTitle"
                  id="newsTitle"
                  required
                />
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="newsDetail">Détail: </label>
                <textarea
                  onChange={(event) => setNewsDetail(event.target.value)}
                  id="newsDetail"
                  name="story"
                ></textarea>
              </div>
              <div className={styles["duo"]}>
                <label htmlFor="date">Date: </label>
                <input
                  onChange={(event) => setNewsDate(event.target.value)}
                  id="newsDate"
                  name="story"
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div className={styles["create"]} onClick={() => createNews()}>
                  Créer{" "}
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Admin;
