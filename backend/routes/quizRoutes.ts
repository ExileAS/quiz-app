const { Router } = require("express");
const router = Router();

const { get_all_quizes } = require("../controllers/quizController");

router.get("/api/quizes", get_all_quizes);

module.exports = router;
