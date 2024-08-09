import express from "express";
import getUsers from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getUsers);

export = router;
