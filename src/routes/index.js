const router = require('express')();
const user = require('./user')();
const main = require('./main')();

router.use("/user", user);
router.use("/main", main);

module.exports = router;