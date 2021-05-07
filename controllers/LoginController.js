// var mongoose = require("mongoose");
var User = require('../models/user');
var LoginController = {};

LoginController.login = function(req, res) {
    
        res.render("../views/Auth/login",{message:""});
        
  };


  LoginController.loginsignin = function(req, res){
      
   };

//   LoginController.loginsignin = (req,res) => {
//       const email = req.body.email
//       const password = req.body.password
//       User.findOne({'email':email})
//       .then(email => {
//             if(!email){
//                   res.json({"Email":"Email Not Found"})
//             }
//             else{
//                   console.log("Successs")
//             }
//       })
//       .catch(err => console.log(err))

// }

//   LoginController.loginsignin = function(req, res) {
      
//       var email = req.body.email;
//       var password = req.body.password;
//       // var userDetail = user.findOne({ where: { email: email } });
//       var userDetail = user.findOne({'email': email}, function(err, user) {
//             console.log(userDetail.email);
//       });
      


      
//       user.findOne({ where: { email: email } }).then(function (err,user) {
//             // console.log(err,user);
//             if (!user) {
//                   console.log(user);
//                   // res.redirect('/admin');
//                 res.redirect('/admin/login',{msg: 'aaaaaaaaaaaaaa'});
//             res.err('Email id does not match');
//             } else if (user) {
//                   console.log('password');
//                 res.redirect('/login');
//             } else {
//             //     req.session.user = user.dataValues;
//             //     res.redirect('/admin');
//             }
//       });

// };

  module.exports = LoginController;

