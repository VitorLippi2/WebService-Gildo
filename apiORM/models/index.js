import { Sequelize } from "sequelize";
import dbconfig from "../config/database.js"
import TutorialModel from "./tutorial.model.js"

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        port: 3306,
        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
)

const db = {}

db.sequelize = sequelize
db.tutorials = TutorialModel(sequelize)

export default db