const router = require('express').Router();
const controller = require('../controller/main/main');
const auth = require('../middlewares/auth');

router.get('/showMain', controller.showMain);
router.get('/detail', controller.detailPost);

module.exports = router;