module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.STRING(45),
            allowull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(100)
        },
        nickname: {
            type: DataTypes.STRING(45)
        },
    });
};