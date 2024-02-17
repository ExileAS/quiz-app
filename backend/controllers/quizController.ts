const QuizModel = require("../models/quizes");

module.exports.get_all_quizes = async (req, res) => {
  console.log("received");
  try {
    const result = await QuizModel.find().sort({ createdAt: -1 });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};
