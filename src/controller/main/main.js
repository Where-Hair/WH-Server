// const { User, Post } = require("../../model");
const Post = require("../../model/post");
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

const detailPost = async (res, req) => {
    try {
        console.log(req.params);
        await Post.destroy({
            where: { id : req.params.id }
        });
        res.status(200).end()
    } catch (e) {
        res.status(409).end()
    }
};

module.exports = {
    showMain,
    detailPost,
};