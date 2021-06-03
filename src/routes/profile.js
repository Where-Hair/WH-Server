const router = require('express').Router();
const controller  = require('../controller/profile/profile');
const authMiddleware = require('../middlewares/auth');
const auth = require('../middlewares/auth');

// router.get("/profile", auth, controller.showProfile);
// router.put("/modify", auth.authMiddleware, controller.modifyProfile);

module.exports = router;