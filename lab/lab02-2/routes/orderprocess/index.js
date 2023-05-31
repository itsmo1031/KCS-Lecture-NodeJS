const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  price = parseInt(req.body['menu']);
  let totalPrice = req.session.totalPrice || 0;
  if (price == 0) {
    totalPrice = 0;
  } else {
    totalPrice += price;
  }
  req.session.totalPrice = totalPrice;

  res.render('orderprocess/index', { totalPrice: req.session.totalPrice });
});

module.exports = router;
