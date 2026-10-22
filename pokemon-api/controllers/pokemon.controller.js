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

export const create = async(req, res) => {
    try{
        if(!req.body.nome){
            res.status(400).json({
                message: "O nome é obrigatório."
            })
        }

        const pokemon = {
            nome: req.body.nome,
            nivel: req.body.nivel || 1,
            hp: req.body.hp || 100,
            ativo: req.body.ativo ?? true
        }

        const data = await Pokemon.create(pokemon);

        return res.status(201).json(data);
    }catch(e){
        return res.status(500).json({
            message: "Erro interno no servidor!"
        })
    }
}

export const addTipoToPokemon = async (req, res) => {
    try{
        const {pokemonId} = req.params;
        const {tipoId} = req.body;

        if(!tipoId){
            return res.status(400).json({
                message: "O id do tipo é obrigatório."
            })
        }

        const pokemon = await Pokemon.findByPk(pokemonId);
        if(!pokemon){
            return res.status(404).json({
                message: "Pokemon não encontrado!"
            })
        }

        const tipo = await Tipo.findByPk(tipoId)
        if(!tipo){
            return res.status(404).json({
                message: "Pokemon não encontrado!"
            })
        }

        await pokemon.addTipo(tipo);

        return res.status(200).json({
            message: `O tipo ${tipo} foi adicionado ao pokemon ${pokemon}.`
        })

    }catch(e){
        return res.status(500).json({
            message: "Erro interno no servidor!"
        })
    }
}