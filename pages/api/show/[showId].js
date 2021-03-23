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

  // HANDLE DELETE
  const { showId } = req.query;

  if (req.method === "DELETE") {
    Show.findByIdAndRemove(showId)
      .then((show) => {
        if (show) {
          res.send({ message: "Show has been deleted successfully!" });
        }
        return res.status(404).send({
          message: "Show not exist with showId" + showId,
        });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Show not exist with showId" + showId,
          });
        }
        return res.status(500).send({
          message:
            "Some error occurred while deleting the book with bookId" + showId,
        });
      });
  }

  if (req.method === "GET") {
    // HANDLE GET BY ID
    Show.findById(showId)
      .then((show) => {
        if (show) {
          res.send(show);
        }
        return res.status(404).send({
          message: "Show not exist with id " + req.params.showId,
        });
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Show not exist with id " + req.params.showId,
          });
        }
        return res.status(500).send({
          message: "Error retrieving book with id " + req.params.showId,
        });
      });
  }
};

export default connectDB(handler);
