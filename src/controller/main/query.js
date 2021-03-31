const { User, Post } = require('../../model');
const post = require('../../model/post');

const show = async (id) => {
    const main = await User.findOne({
        include: [
        {
            model: post,
            attributes: ['id', 'image','content'],
            limit: 1,
        },
        ],
        where: { id },
    });
    return main;
}

module.exports = {
    show,
};