import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import Show from "../../../models/show.model";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: "https://p4-collectif.com",
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST"],
  })
);

const handler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await connectDB();

  // HANDLE DELETE
  const { showId } = req.query;

  if (req.method === "DELETE") {
    return Show.findByIdAndRemove(showId)
      .then((show) => {
        res
          .status(200)
          .send({ message: "Show has been deleted successfully!" });
      })
      .catch((err) => {
        console.log("err", err);
        return res.status(500).send({
          message:
            "Some error occurred while deleting the book with bookId" + showId,
        });
      });
  }
};

export default handler;
