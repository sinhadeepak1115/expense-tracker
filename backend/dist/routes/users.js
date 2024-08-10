"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../controllers/userControllers"));
const { registerUsers, loginUser, currentUser } = userControllers_1.default;
const router = express_1.default.Router();
router.route("/register").post(registerUsers);
router.route("/login").post(loginUser);
router.route("/current").get(currentUser);
module.exports = router;
