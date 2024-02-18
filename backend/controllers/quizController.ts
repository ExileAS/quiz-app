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

module.exports.post_add_quiz = async (req, res) => {
  const { quiz } = req.body;

  try {
    const newQuiz = await QuizModel.create({ ...quiz });
    res.status(201).json({ id: newQuiz._id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};

module.exports.post_update_quiz = async (req, res) => {
  const { id, updates } = req.body;

  try {
    const updatedQuiz = await QuizModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: { updates },
      },
      { new: true, upsert: true }
    );
    res.status(200).json({ id: updatedQuiz._id });
  } catch (err) {
    console.log(err);
    res.status(400).json(400);
  }
};

module.exports.delete_quiz = async (req, res) => {
  const { id } = req.body;

  try {
    await QuizModel.findByIdAndDelete({ _id: id });
    res.status(204).json({ msg: "deleted succcessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};
