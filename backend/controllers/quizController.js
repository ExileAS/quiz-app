var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const QuizModel = require("../models/quizes");
module.exports.get_all_quizes = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("received");
    try {
        const result = yield QuizModel.find().sort({ createdAt: -1 });
        res.status(200).json({ result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});
module.exports.post_add_quiz = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { quiz } = req.body;
    try {
        const newQuiz = yield QuizModel.create(Object.assign({}, quiz));
        res.status(201).json({ id: newQuiz._id });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});
module.exports.post_update_quiz = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id, updates } = req.body;
    try {
        const updatedQuiz = yield QuizModel.findByIdAndUpdate({ _id: id }, {
            $set: { updates },
        }, { new: true, upsert: true });
        res.status(200).json({ id: updatedQuiz._id });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(400);
    }
});
module.exports.delete_quiz = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield QuizModel.findByIdAndDelete({ _id: id });
        res.status(204).json({ msg: "deleted succcessfully" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});
