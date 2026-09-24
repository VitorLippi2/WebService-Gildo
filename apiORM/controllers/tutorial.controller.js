import db from "../models/index.js";
import { Sequelize } from "sequelize";

const Tutorial = db.tutorials
const Op = Sequelize.Op

export const create = (req, res) => {
    if (!req.body.title){
        return res.status(400).json({
            message: "A sua requisição não pode vir vazia."
        })
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ?? false
    }

    Tutorial.create(tutorial).then( data => {
        return res.status(201).json(data)
    }).catch(error => {
        res.status(500).json({
            message: "Ocorreu algum erro interno ao criar o registro."
        })
    })
}