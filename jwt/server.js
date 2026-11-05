import express from "express"
import authRouter from "./routes/auth.routes.js"

const api = express()

api.use(express.json())
api.use(authRouter)

api.listen(45678, () => {
    console.log("Aplicação rodando na porta 45678");
})