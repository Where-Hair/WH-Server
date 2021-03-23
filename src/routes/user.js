const router = require('express');
const controller = require('../controller/user');
const auth = require('../middlewares/auth');

router.post('/signIn', controller.signIn);
router.post('/signUp', controller.signUp);

module.exports = router;
