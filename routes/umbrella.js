var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();

/* GET costumes */
router.get('/', umbrella_controlers.umbrella_view_all_Page );
module.exports = router;

