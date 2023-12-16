const router = require('express').Router();
const listRoutes = require('./list-routes');

//adding prefix for scalability
router.use('/lists', listRoutes);

module.exports = router;