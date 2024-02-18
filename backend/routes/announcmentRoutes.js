const { Router } = require("express");
const router = Router();
const { get_all_announcments, post_add_announcment, post_update_announcment, delete_announcment, } = require("../controllers/announcmentController");
router.get("/api/announcments", get_all_announcments);
router.post("/api/add-announcment", post_add_announcment);
router.post("/api/update-announcment", post_update_announcment);
router.delete("/api/delete_announcment", delete_announcment);
module.exports = router;
