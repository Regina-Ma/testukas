const express = require("express");
const bodyParser = require("body-parser");
const languages = require("./routes/api/languages");

// const errorController = require(".controllers/error");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.set.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => console.log("connected to DB"))
    .on("error", (e) => console.log(e));
  mongoose.Promise = global.Promise;
};

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const db = require("../../config/keys").mongodbURI;
// const mongoose = require("mongoose");
// MongoClient.connect(db)
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log("DB error", err));

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log("DB error", err));

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    if (req.secure) next();
    else res.redirect(`https://'${req.headers.host}${req.url}`);
  });
}
