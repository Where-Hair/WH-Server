const { Post } = require("../../model");
const query = require("./query");

const showProfile = async (req, res) => {
    const id = req.decode.id;
    try {
        const profile = await query(id);
        res.status(200).json({
            message: "성공"
        });
    } catch {
        res.status(400).json({
            message: "실패"
        });
    }
};