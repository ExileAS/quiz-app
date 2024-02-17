const { Router } = require("express");
const router = Router();

const {
  get_all_announcments,
} = require("../controllers/announcmentController");

router.get("/api/announcments", get_all_announcments);

module.exports = router;
