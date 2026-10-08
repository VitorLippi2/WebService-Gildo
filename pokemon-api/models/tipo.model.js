const tipoModel = (sequelize, DataTypes) => {
    const Tipo = sequelize.define("tipo", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Tipo;
};

export default tipoModel;