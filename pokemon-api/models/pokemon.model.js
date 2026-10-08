const pokemonModel = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define("pokemon", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nivel: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Pokemon;
};

export default pokemonModel;