import connectDB from "../../../middleware/mongodb";
import Show from "../../../models/show.model";

const handler = async (req, res) => {
  await connectDB();
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
};

export default connectDB(handler);
