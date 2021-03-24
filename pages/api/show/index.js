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
  // HANDLE POST
  if (req.method === "POST") {
    if (!req.body.title) {
      return res.status(400).send({
        message: "Please enter a show title title.",
      });
    }
    // Create a Show
    const show = new Show({
      title: req.body.title,
      date: req.body.date,
      detail: req.body.detail,
      paragraph1: req.body.paragraph1,
      paragraph2: req.body.paragraph2,
      paragraph3: req.body.paragraph3,
      paragraph4: req.body.paragraph4,
    });

    // Save Show in the database
    show
      .save()
      .then((show) => {
        res.send(show);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Book.",
        });
      });
  }
  // HANDLE GET
  if (req.method === "GET") {
    Show.find()
      .then((show) => {
        res.send(show);
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
