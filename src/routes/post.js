const router = require('express');
const controller = require('../controller/post');

router.get('/post', controller.post);
router.get('/detailPost', controller.detailPost);
router.post('/write', controller.write);

module.exports = router;