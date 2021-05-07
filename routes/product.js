var express = require('express');
var router = express.Router();
var Product = require('../models/product');
const { check, validationResult } = require('express-validator');


router.get('/', function(req, res) {

      res.render("../views/product/create");
      
});

router.post('/save',[
    check('name', 'name  is not valid').isEmpty()
  ],  function(req, res) {
    console.log(req.body.title);
    // process.exit();
    
//   check('name', 'name is required').notEmpty();
const errors = validationResult(req);
// console.log(errors);
// process.exit();
    var product = new Product({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    });
  
    product.save(function(errors) {
      if(errors) {
        console.log(errors);
        // res.render("../views/employees/create");
      } else {
        console.log("Successfully created an Product.");
        res.redirect("/product");
      }
    });
    
});

router.get('/list', function(req, res) {
    Product.find({}).exec(function (err, product) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.status(200).json(
            product
        );
        }
      });
});

module.exports = router;