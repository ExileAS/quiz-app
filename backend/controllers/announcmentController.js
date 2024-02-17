var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const AnnouncmentModel = require("../models/announcments");
module.exports.get_all_announcments = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const result = yield AnnouncmentModel.find().sort({ createdAt: -1 });
        res.status(200).json({ result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});
