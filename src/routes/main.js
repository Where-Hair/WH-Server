const router = require('express');
const controller = require('../controller/main/main');
const auth = require('../middlewares/auth');

router.get('/showMain', controller.showMain);
router.get('/detail', controller.detail);

module.exports = router;