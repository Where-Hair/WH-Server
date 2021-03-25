const jwt = require("jsonwebtoken");

const access = async (req, res) => {
    const secret = req.app.get("jwt-secret");
    const token = await jwt.sign({
        id: user.id,
    },
    secret,
    {
        expiresIn: "7d",
    }, (err, token) => {
        if (err) reject(err)
        resolve(token)
    });
    return token
}

module.exports = access;