var express = require('express');
let usermodel = require('../models/usermodel');
const addproductmodel = require('../models/addproductmodel');
var router = express.Router();
var session = require('express-session');
var Razorpay = require('../Payment/Razorpay')
/* GET users listing. */
router.get('/', function(req, res, next) {
if(req.session.employee) {
  let employee =req.session.employee;
    res.render('index',{employee});
}else{
  res.render('index');

}
});
router.get('/login', async (req,res)=>{
  res.render('user/login');
});
router.get('/tent', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/tent', { product });
  } catch (error) {

  }
res.render('user/tent');
});
router.get('/backpack', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/backpack', { product });
  } catch (error) {

  }
  res.render('user/backpack');
});
router.get('/bags', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/bags', { product });
  } catch (error) {

  }
  res.render('user/bags');
});
router.get('/chair', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/chair', { product });
  } catch (error) {

  }
  res.render('user/chair');
});
router.get('/lights', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/lights', { product });
  } catch (error) {

  }
  res.render('user/lights');
});
router.get('/stoves', async (req,res)=>{
  try {
    let product = await addproduct.find(req.body);
    console.log(req.body);
    res.render('user/stoves', { product });
  } catch (error) {

  }
  res.render('user/stoves');
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
        res.redirect('/users')
      }else{
        req.session.nouser = "Username or password incorrect";
        res.redirect('/users/Login')
      }
  } catch (error) {
    console.log(error)
  }
}); 

router.get('/types/:type',async(req,res)=>{
  console.log(req.params.type)
  let type = req.params.type;
  try {
   let   products = await addproductmodel.find({category:type})
    console.log(products)
    res.render('user/ProductTypes',{products})
  } catch (error) {
      console.log(error)
  }
})
router.get('/cart/:id', async(req,res)=>{
  let id  = req.params.id;
    try {
        let product = await addproductmodel.findOne({_id:id})
        var options = {
          amount: product.Price,  // amount in the smallest currency unit
          currency: "INR",
          receipt: "order_rcptid_11"
        };
        Razorpay.orders.create(options, function(err, order) {
          console.log(order);
          res.render('user/cart',{product,order});
        });
      

    } catch (error) {
      
    }
})
module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        