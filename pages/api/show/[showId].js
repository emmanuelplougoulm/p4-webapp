import Cors from "cors";
import initMiddleware from "../../../middleware/init-middleware";
import connectDB from "../../../middleware/mongodb";
import Shows from "../../../models/show.model";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "DELETE"],
  })
);

const handler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await connectDB();

  // HANDLE DELETE
  const { showId } = req.query;

  if (req.method === "GET") {
    return Shows.findById(showId).then((show) => {
      res.status(200).json(show);
    });
  }

  if (req.method === "DELETE") {
    return Shows.findByIdAndRemove(showId)
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
