import { DataTypes } from "sequelize"

export default (sequelize) => 
    sequelize.define("tutorial",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
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