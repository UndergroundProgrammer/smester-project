var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('products');
// });
router.get("/cart", async function (req, res, next) {
  let cart =req.cookies.cart;
  if (!cart) cart = [];
  console.log({cart});
    res.send({cart});
});
module.exports = router;
