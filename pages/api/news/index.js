import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import News from "../../../models/news.model";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // origin: ["https://p4-collectif.com", "https://p4-collectif.vercel.app"],
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST"],
  })
);

const handler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await connectDB();

  if (req.method === "GET") {
    return News.find()
      .then((news) => {
        res.status(200).json(news);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

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

    return news
      .save()
      .then((news) => {
        res.status(200).send(news);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while saving the news.",
        });
      });
  }
};

export default handler;
