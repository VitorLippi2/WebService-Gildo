import dbconfig from "../config/database.js"
import pokemonModel from "./pokemon.model.js"
import tipoModel from "./tipo.model.js"
import { Sequelize, DataTypes } from "sequelize"

const sequelize = new Sequelize({
    dialect: dbconfig.dialect,
    storage: dbconfig.storage,
    logging: dbconfig.logging
})

const db = {}

db.sequelize = sequelize
db.pokemons = pokemonModel(sequelize, DataTypes)
db.tipos = tipoModel(sequelize, DataTypes)

db.pokemons.belongsToMany(db.tipos, {
    through: "pokemons_tipos",
    as: "tipos",
    foreignKey: "pokemon_id"
})

db.pokemons.belongsToMany(db.pokemons, {
    through: "pokemons_tipos",
    as: "pokemon",
    foreignKey: "tipo_id"
})

export default db