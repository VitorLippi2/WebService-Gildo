import express from "express"
import cors from "cors"
import db from "./models/index.js"
import tutorialRouter from "./routes/tutorial.routes.js"

const app = express()

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/tutorials", tutorialRouter)

const PORT = 4567

db.sequelize.sync({ force: true }).then(() => {
    console.log("DROP and re-sync db.");
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
})