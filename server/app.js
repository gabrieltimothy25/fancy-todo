require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/");
const cors = require("cors");

mongoose.connect(
  "mongodb://localhost/fancy-todo",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("Connection to database failed", err);
    } else {
      console.log("Connection to database successful");
    }
  }
);

app.use(cors());
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
