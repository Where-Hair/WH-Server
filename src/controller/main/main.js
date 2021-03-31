const { User, Post } = require("../../model");
const query = require('./query');

const showMain = async (req, res) => {
    const id = req.decoded.id;
    try {
        const main = await query.show(id);
        res.status(200).json({
            main
        });
        } catch {
            res.status(404).json({
                message: "Not Found"
            });
        }
};

module.exports = {
    showMain
}