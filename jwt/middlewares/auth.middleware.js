import dotenv from "dotenv"
dotenv.config()

import jsonwebtoken from "jsonwebtoken"
import { user } from "../models/user.model.js"

const PRIVATE_KEY = process.env.PRIVATE_KEY

export function tokenValidated(req, res, next) {
    const [, token] = req.headers.authorization?.split(" ") || ["",""]

    if(!token){
        return res.status(401).json({
            message: "Token não fornecido"
        })
    }

    try{
        const payload = jsonwebtoken.verify(token, PRIVATE_KEY)
        const userFromToken = typeof payload !== "string" && payload.user 

        if (!user && !userFromToken){
            return res.status(401).json({
                message: "Token inválido!"
            })
        }

        req.headers.user = payload.user

        return next()

    }catch(error){
        return res.status(401).json({
            message: "Token inválido!"
        })
    }

}