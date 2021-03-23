const withImages = require("next-images");

module.exports = withImages({
  env: {
    mongodburl: "mongodb://localhost:27017/next-js-db",
    auth: "monde-nouveau",
  },
});
