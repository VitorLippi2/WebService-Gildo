import dotenv from "dotenv"
dotenv.config()
import jsonwebtoken from "jsonwebtoken";
import {user} from "../models/user.model.js";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

export function publicInfo(_, res){
    
    return res.status(200).json({
        message: "Rota pública"        
    });

}

export function login(req, res){

    const [, hash] = req.headers.authorization?.split(" ") || ["",""]
    const [email, password] = Buffer.from(hash, "base64").toString().split(":")

    try{
        const correctPassword = (email == "huguinho@email.com") && (password == 123456)

        if (!correctPassword){
            return res.status(401).json({
                message: "Email ou senha inválidos."
            })
        }

        const token = jsonwebtoken.sign(
            {user: JSON.stringify(user)},
            PRIVATE_KEY,
            {expiresIn: "60m"}
        )

        return res.status(200).json({
            data: {user, token}
        })

    }catch(e){
        return res.status(500).json({
            message: "Erro interno do servidor"
        })
    }
}

export function privateInfo(req, res){
    const {user} = req.headers

    return res.status(200).json({
        data: JSON.parse(user),
        message: "Esta é uma rota privada"
    })
}