var express = require('express');
var router = express.Router();
const productmodel = require('../models/addproductmodel');
const addproductmodel = require('../models/addproductmodel');
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
    console.log("add p[roduct")
    console.log(req.body);
    console.log(req.files);  
    try {
      const product = await addproductmodel.create(req.body);
      let { img } = req.files;
      img.mv('./public/images/product/' + product._id + ".jpg").then((err) => {
        if (!err) {
          console.log("data inserted")
         res.redirect('/adminhome')
          }
        })
      }catch(err){
          console.log(err)
      }
     
  })

module.exports = router;
