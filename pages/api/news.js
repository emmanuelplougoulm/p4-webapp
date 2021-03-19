import connectDB from "../../middleware/mongodb";
import News from "../../models/news.model";

const handler = async (req, res) => {
  // HANDLE POST
  if (req.method === "POST") {
    if (!req.body.title) {
      return res.status(400).send({
        message: "Please enter a title.",
      });
    }
    const news = new News({
      title: req.body.title,
      detail: req.body.detail,
      date: req.body.date,
    });

    news
      .save()
      .then((news) => {
        res.send(news);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the news.",
        });
      });
  }
  // HANDLE GET
  if (req.method === "GET") {
    News.find()
      .then((news) => {
        res.send(news);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the book.",
        });
      });
  }
};

export default connectDB(handler);
