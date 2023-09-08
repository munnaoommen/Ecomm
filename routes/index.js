var express = require('express');
var router = express.Router();

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
module.exports = router;
