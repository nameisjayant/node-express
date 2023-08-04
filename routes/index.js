var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/app",(req,res)=>{
  res.render('index',{title : 'App User Flow'})
})

module.exports = router;
