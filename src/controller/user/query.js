const bcrypt = require("bcrypt");

const passwordEncoding = async (password) => {
    return await bcrypt.hashSync(password);
};

module.exports = {
     passwordEncoding, 
};