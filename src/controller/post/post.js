const { Post } = require("../../model");
const query = require("./query");

const write = async (req, res, next) => {
    const content  = req.body.content;
    const id = req.decoded.id;
    try {
        const post = await Post.findOne({ where: { id } });
        if(!post) await Post.create({ content, id });
        post.content = content;
        await post.save();
        res.status(200).json({
            message: "성공",
        });
    } catch (err) {
        res.status(404).json({
            message: "실패",
        });
    }
};

module.exports = {
    write,
};