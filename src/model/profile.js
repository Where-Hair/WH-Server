module.exports = (sequelize, DataTypes) => {
    return sequelize.define("profile", {
       id: {
           type: DataTypes.STRING(45),
           allowull: false,
           primaryKey: true,
       },
       nickname: {
           type: DataTypes.STRING(45),
       },
       image: {
           type: DataTypes.STRING(100),
       },
    });
};