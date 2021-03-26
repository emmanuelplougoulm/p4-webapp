import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import News from "../../../models/news.model";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["DELETE"],
  })
);

const handler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await connectDB();

  // HANDLE DELETE
  const { newsId } = req.query;

  if (req.method === "DELETE") {
    return News.findByIdAndRemove(newsId)
      .then((news) => {
        res
          .status(200)
          .send({ message: "News has been deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message:
            "Some error occurred while deleting the news with newsId" + newsId,
        });
      });
  }
};

export default handler;
