import express from "express";
import * as pokemon from "../controllers/pokemon.controller.js";

const router = express.Router();

router.get("/", pokemon.findAll)
router.post("/", pokemon.create)
router.post("/:pokemonId/tipos", pokemon.addTipoToPokemon)

export default router