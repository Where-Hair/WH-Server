const { config } = require("dotenv");

require("dotenv").config();

module.exports = {
    port: parseInt(process.env.SERVER_PORT),
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        nickname: process.env.DB_NICKNAME
    }
};

module.exports = config;
