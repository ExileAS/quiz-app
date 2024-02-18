const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  dueTo: {
    type: String,
    required: true,
  },
});

const QuizModel = mongoose.model("Quiz", quizSchema);

module.exports = QuizModel;
