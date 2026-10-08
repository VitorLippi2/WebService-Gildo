import db from "../models/index.js";

const Pokemon = db.pokemon
const Tipo = db.tipos

export const findAll = async(req, res) => {
    const data  = await Pokemon.findAll({
        include:[{
            model: Tipo,
            as: "tipos",
            attributes: ["id", "nome"],
            through: {attributes: []}
        }]
    })

    return res.status(200).json(data);
}