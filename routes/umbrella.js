var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET umbrella */
router.get('/', umbrella_controlers.umbrella_view_all_Page );
/* GET detail umbrella page */
router.get('/detail', umbrella_controlers.umbrella_view_one_Page);
/* GET create umbrella page */
router.get('/create',secured, umbrella_controlers.umbrella_create_Page);
/* GET create update page */
router.get('/update',secured, umbrella_controlers.umbrella_update_Page);
router.get('/delete',secured, umbrella_controlers.umbrella_delete_Page);
module.exports = router;

