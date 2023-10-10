var express = require('express');
let usermodel = require('../models/usermodel');
var router = express.Router();
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',(req,res)=>{
  res.render('user/login');
});
router.get('/tent',(req,res)=>{
res.render('user/tent');
});
router.get('/backpack',(req,res)=>{
  res.render('user/backpack');
});
router.get('/bags',(req,res)=>{
  res.render('user/bags');
});
router.get('/chair',(req,res)=>{
  res.render('user/chair');
});
router.get('/lights',(req,res)=>{
  res.render('user/lights');
});
router.get('/stoves',(req,res)=>{
  res.render('user/stoves');
});
router.get('/cart',(req,res)=>{
  res.render('user/cart');
  });
router.post('/register',async (req,res)=>{
  console.log(req.body);
  try {
    let data = await usermodel.create(req.body)
    console.log("data inserted")
  } catch (error) {
    console.log(error)
  }
})

router.post('/login', async function(req, res, next) {
  try {
      let {email} = req.body;
      let {password} = req.body;
      console.log(req.body,"req")
      let employee = await usermodel.find({email:email,password:password})
      console.log(employee,"employe");
      if(employee.length >0){
          req.session.employee = employee[0];
          console.log( req.session.employee ,"session emp")
        res.redirect('/')
      }else{
        req.session.nouser = "Username or password incorrect";
        res.redirect('/users/Login')
      }
  } catch (error) {
    console.log(error)
  }
}); 

module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        