const bcrypt = require("bcrypt-nodejs");

const passwordEncoding = async (password) => {
    return await bcrypt.hashSync(password);
};

module.exports = {
     passwordEncoding, 
};