var router = require("express").Router();

router.use('/api', require('./apiRoutes'));
router.use('/auth', require('./authRoutes'));
// router.use('/auth', require('./database-routes'));

module.exports = router;