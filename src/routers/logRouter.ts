import express from "express";
import logController from "../controllers/logController";

const router = express.Router();

router.get("/", logController.getLogs);

router.get("/:id", logController.getLogById);

router.post("/", logController.postLog);

export default router;
