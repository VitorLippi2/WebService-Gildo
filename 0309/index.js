import express from "express";
import GamesRouter from "./src/routes/games.routes.js";

const app = express();
app.use(express.json());

app.use("/games", GamesRouter)

app.listen(4657, () => {
    console.log("rodando");
});