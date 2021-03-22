const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    detail: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models["News"] || mongoose.model("News", NewsSchema);
