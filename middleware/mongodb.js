import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
