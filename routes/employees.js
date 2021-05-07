var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");
var register = require("../controllers/RegisterController.js");
var login = require("../controllers/LoginController.js");

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);

router.get('/register', register.register);

router.post('/signup', register.registersignup);

router.get('/login', login.login);

// router.post('/login', login.loginsignin);
router.post('/login', function(req, res, next) {
    console.log(User);
      if(!req.body.email || !req.body.password){
         res.render('../views/Auth/login', {message: "Please enter both email and password"});
      } else {
         User.filter(function(user){
            if(user.email === req.body.email && user.password === req.body.password){
               req.session.user = user;
               res.redirect('/login');
            }
         });
      //    res.render('login', {message: "Invalid credentials!"});
      res.render("../views/Auth/login",{msg: ''});
      }
  });

module.exports = router;