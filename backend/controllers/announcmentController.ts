const AnnouncmentModel = require("../models/announcments");

module.exports.get_all_announcments = async (req, res) => {
  try {
    const result = await AnnouncmentModel.find().sort({ createdAt: -1 });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};
