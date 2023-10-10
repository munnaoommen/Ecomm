var express = require('express');
var router = express.Router();
const productmodel = require('../models/addproductmodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/adminlogin',(req,res)=>{
  res.render('admin/adminlogin');
});

  router.get('/addproduct',(req,res)=>{
    res.render('admin/addproduct');
  });
  router.get('/adminhome',(req,res)=>{
    res.render('admin/adminhome');
  });
  router.get('/team',(req,res)=>{
    res.render('admin/team');
  });

  router.post('/adminlogin',(req,res)=>{
    let email ="admin";
    let password ="admin";
    if(req.body.email ==email && req.body.password==password){
            res.redirect('/adminhome')
    }else{
            res.redirect('/adminlogin')
    }
  })
  router.post('/addproduct',async (req,res)=>{
    console.log(req.body);
    try {
      let data = await productmodel.create(req.body)
      console.log("data inserted")
      res.redirect('/addproduct',data)
    } catch (error) {
      console.log(error)
    }
  })
module.exports = router;
