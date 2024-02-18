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

module.exports.post_add_announcment = async (req, res) => {
  const { announcment } = req.body;

  try {
    const newAnnouncment = await AnnouncmentModel.create({ ...announcment });
    res.status(201).json({ id: newAnnouncment._id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};

module.exports.post_update_announcment = async (req, res) => {
  const { id, updates } = req.body;

  try {
    const updatedAnnouncment = await AnnouncmentModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: { updates },
      },
      { new: true, upsert: true }
    );
    res.status(200).json({ id: updatedAnnouncment._id });
  } catch (err) {
    console.log(err);
    res.status(400).json(400);
  }
};

module.exports.delete_announcment = async (req, res) => {
  const { id } = req.body;

  try {
    await AnnouncmentModel.findByIdAndDelete({ _id: id });
    res.status(204).json({ msg: "deleted succcessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};
