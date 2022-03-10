var express = require("express");
var router = express.Router();
var path = require("path");


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/frontpage.html");
});


module.exports = router;
