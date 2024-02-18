const { Router } = require("express");
const router = Router();
const { get_all_quizes, post_add_quiz, post_update_quiz, delete_quiz, } = require("../controllers/quizController");
router.get("/api/quizes", get_all_quizes);
router.post("/api/add-quiz", post_add_quiz);
router.post("/api/update-quiz", post_update_quiz);
router.delete("/api/delete_quiz", delete_quiz);
module.exports = router;
