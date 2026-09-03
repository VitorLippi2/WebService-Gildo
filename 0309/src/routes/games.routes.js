import { Router } from "express";
import { findAll, findOne } from "../controllers/games.controller.js";

const router = new Router();

router.get("/", findAll);

router.get("/:id", findOne);

export default router