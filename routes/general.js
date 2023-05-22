import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.route("/dashboard").get( getDashboardStats);

export default router;
