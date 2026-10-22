import express from "express";
import * as tipo from "../controllers/tipo.controller.js";

const router = express.Router()

router.post("/",tipo.create)
router.post("/:tipoId/pokemon",tipo.addPokemonToTipo)

export default router