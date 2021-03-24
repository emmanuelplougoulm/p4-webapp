import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import News from "../../../models/news.model";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: "http://p4-collectif.vercel.app",
    // Only allow requests with GET, POST and OPTIONS
    methods: ["DELETE"],
  })
);

const handler = async (req, res) => {
  await cors(req, res);
  await connectDB();
  // HANDLE DELETE
  const { newsId } = req.query;

  if (req.method === "DELETE") {
    News.findByIdAndRemove(newsId)
      .then((news) => {
        if (news) {
          res.send({ message: "News has been deleted successfully!" });
        }
        return res.status(404).send({
          message: "News not exist with NewsId" + newsId,
        });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "News not exist with NewsId" + newsId,
          });
        }
        return res.status(500).send({
          message:
            "Some error occurred while deleting the news with newsId" + newsId,
        });
      });
  }
};

export default connectDB(handler);
