import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import News from "../../../models/news.model";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: ["https://p4-collectif.com", "https://p4-collectif.vercel.app"],
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST"],
  })
);

const handler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await connectDB();
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
        res.status(200).send(news);
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
