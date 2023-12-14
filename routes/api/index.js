const router = require('express').Router();
const lisRoutes = require('./list-routes');
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');
//adding prefix for scalability
router.use('/lists', lisRoutes);

modules.expoerts = router;