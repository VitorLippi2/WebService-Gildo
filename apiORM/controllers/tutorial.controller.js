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

export const findAll = (req, res) => {
    const title = req.query.title
    const condition = title ? { title : {[Op.like]: `%${title}%`} } : null;

    Tutorial.findAll({where: condition})
    .then(data => {
        return res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: "Ocorreu algum erro interno ao ler os registros."
        })
    })
}

export const findOne = (req, res) => {
    // assume que params tem um atributo chamado id
    const {id} = req.params;

    Tutorial.findByPk(id)
    .then(data => {
        if(data) {
            return res.status(200).json(data)
        }else{
            return res.status(404).json({
                message: `Tutorial de id ${id} não encontrado`
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Ocorreu um erro interno ao ler o registro."
        })
    })
}

export const remove = (req, res) => {
    const {id} = req.params

    Tutorial.destroy({
        where: {id:id}
    })
    .then(num => {
        if (num == 1){
            return res.sendStatus(204)
        }else{
            return res.status(404).json({
                message: "Não foi possível deletar. Provavelmente não foi encontrado"
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Ocorreu algum erro interno ao apagar o resgistro."
        })
    })
}