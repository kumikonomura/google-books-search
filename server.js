const express = require("express");
const { join } = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static(join(__dirname, "client", "build")));

routes(app);

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks_db";

require("mongoose")
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(_ =>
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    })
  )
  .catch(e => console.log(e));
