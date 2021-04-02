module.exports = (sequelize, DataTypes) => {
    return sequelize.define("post", {
        id: {
            type: DataTypes.INT,
            primaryKey: true
        },
        shopName: {
            type: DataTypes.STRING(20)
        },
        shopImage: {
            type: DataTypes.STRING(100)
        },
        profileImage: {
            type: DataTypes.STRING(100)
        },
        introduction: {
            type: DataTypes.STRING(50)
        },
        content: {
            type: DataTypes.STRING(200)
        },
    });
};