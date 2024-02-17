const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const announcmentSchema = new Schema({
    announcer: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const announcmentModel = mongoose.model("Announcment", announcmentSchema);
module.exports = announcmentModel;
