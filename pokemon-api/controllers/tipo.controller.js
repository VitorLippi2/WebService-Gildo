import db from "../models/index.js";

const Pokemon = db.pokemons
const Tipo = db.tipos

export const create = async(req, res) => {
    try{
        if(!req.body.nome){
            return res.status(400).json({
                message: "O nome é obrigatório."
            })
        }

        const tipo = {
            nome: req.body.nome
        }

        const data = await Tipo.create(tipo);

        return res.status(201).json(data);
    }catch(e){
        return res.status(500).json({
            message: "Erro interno no servidor!"
        })
    }
}

export const addPokemonToTipo = async (req, res) => {
    const {tipoId} = req.params
    const {pokemonId} = req.body

    try{
        if(!pokemonId){
            return res.status(400).json({
                message: "O id do Pokemon é obrigatório."
            })
        }
    
        const tipo = await Tipo.findByPk(tipoId)
    
        if(!tipo){
            return res.status(404).json({
                message: "Tipo não encontrado."
            })
        }
    
        const pokemon = await Pokemon.findByPk(pokemonId)
        if(!pokemon){
            return res.status(404).json({
                message: "Pokemon não encontrado."
            })
        }
    
        await tipo.addPokemon(pokemon)
    
        return res.status(200).json({
            message: `O pokemon ${pokemon.nome} foi adicionado ao tipo ${tipo.nome}`
        })
    }catch(e){
        return res.status(500).json({
            message: "Erro interno no servidor!"
        })
    }
}
