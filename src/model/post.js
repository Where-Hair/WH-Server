module.exports = (sequelize, DataTypes) => {
    return sequelize.define("post", {
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