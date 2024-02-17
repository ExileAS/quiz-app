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
const quizModel = mongoose.model("Quiz", quizSchema);
module.exports = quizModel;
export {};
