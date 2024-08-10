import express from "express";
import userControllers from "../controllers/userControllers";

const { registerUsers, loginUser, currentUser } = userControllers;
const router = express.Router();

router.route("/register").post(registerUsers);
router.route("/login").post(loginUser);
router.route("/current").get(currentUser);

export = router;
