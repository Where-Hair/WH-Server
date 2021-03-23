const router = require('express')();
const auth = require('./auth')();
const user = require('./user')();
const main = require('./main')();

router.use("/auth", auth);
router.use("/user", user);
router.use("/main", main);

module.exports = router;