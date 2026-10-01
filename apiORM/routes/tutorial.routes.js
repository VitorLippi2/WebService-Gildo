import express from "express"
import { create, findAll, findOne, remove } from "../controllers/tutorial.controller.js"

const router = express.Router();

router.post("/", create)
router.get("/", findAll)
router.get("/:id", findOne)
router.delete("/:id", remove)

export default router