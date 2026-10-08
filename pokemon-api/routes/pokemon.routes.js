import express from "express";
import * as pokemon from "../controllers/pokemon.controller.js";

const router = express.Router();

router.get("/", pokemon.findAll)

export default router