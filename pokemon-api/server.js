import express from "express";
import cors from "cors";
import db from "./models/index.js";
import PokemonRouter from "./routes/pokemon.routes.js"
import TipoRouter from "./routes/tipo.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pokemon", PokemonRouter)
app.use("/tipos", TipoRouter)

const PORT = 4567;

(async () => {
    try {
        await db.sequelize.sync({force:true})
        console.log("Base de dados sincronizada");

        app.listen(PORT, () => {
            console.log(`Aplicação rodando na porta ${PORT}`);
        })
    } catch(error){
        console.error(`Falha ao sincronizar a base de dados \n ${error}`);
    }
})()