import { DataTypes } from "sequelize"

export default (sequelize) => 
    sequelize.define("tutorial",
        {
            title: { 
                type: DataTypes.STRING 
            },
            description: {
                type:DataTypes.STRING
            },
            published: {
                type: DataTypes.BOOLEAN
            }
        }
    )