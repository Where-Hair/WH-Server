const router = require('express');
const controller  = require('../controller/profile/profile');
const authMiddleware = require('../middlewares/auth');
const auth = require('../middlewares/auth');

router.get("/profile", auth.authMiddleware, controller.showProfile);
router.put("/modify", auth.authMiddleware, controller.modifyProfile);

module.exports = router;