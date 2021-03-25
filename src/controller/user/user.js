const { User } = require("../../model");
const query = require("./query");
const token = require("./token");

const signUp = async (req, res) => {
    const { nickname ,id, password } = req.body;
    try {
        const encodedPassword = await query.passwordEncoding(password);
        await User.create({nickname, id, encodedPassword});
        res.status(200).json({
            message: "성공",
        });  
    } catch (err) {
        res.status(409).json({
            message: "이미 회원가입한 계정",
            err: err.message
        });
    }
};

const signIn = async (req, res) => {
    const { id, password } = req.body;
    try {
        const user = await query.findOneByUserId(id);
        if(!user) throw new Error ("계정 없음");
        if (!(await query.passwordCompare(password, user.password)))
        res.status(409).end();
        const accessToken = await token.access(req, user);
      } catch (err) {
          res.status(404).json({
              message: "실패",
          });
      } 
};

module.exports = {
    signUp,
    signIn,
};
