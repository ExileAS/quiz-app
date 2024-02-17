const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const announcmentRouter = require("./routes/announcmentRoutes");
const quizRouter = require("./routes/quizRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    const PORT = process.env.PORT || 9090;
    app.listen(PORT);
    console.log(`listening on port ${PORT}`);
  })
  .catch((err) => console.log(err));

app.use(announcmentRouter);
app.use(quizRouter);
