// var mongoose = require("mongoose");
var User = require('../models/user');
var RegisterController = {};

RegisterController.register = function(req, res) {
        
        res.render("../views/Auth/register",{success_msg:''});
        
  };

  RegisterController.registersignup = function(req, res) {
    console.log(req.body);
    var usersdetails = new User(req.body);
    usersdetails.save(function(errors) {
      if(errors) {
        console.log(errors);
        res.render("../views/Auth/register",{errors:errors});
      } else {
        // console.log("Registeration successfull.");
        res.locals.success_msg = req.flash('success_msg', 'You are registered and can now log in');
        res.redirect('/admin/register');
        // res.status({success_msg:'You are registered and can now log in'}).redirect('/admin/register');
      }
    });
};

module.exports = RegisterController;

