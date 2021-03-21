module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INT,
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING(100)
        },
        content: {
            type: DataTypes.STRING(200)
        },
    });
};