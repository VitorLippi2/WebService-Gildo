import { Router } from "express";
import { findAll, findOne, create } from "../controllers/games.controller.js";
import { validateId } from "../middleware/validated_middleware.js";

const router = new Router();

router.get("/", findAll);

router.get("/:id", validateId, findOne);

router.post("/", create);

export default router