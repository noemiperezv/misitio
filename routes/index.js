var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});

/*router.get('/', function(req, res, next){
  res.render('index', {title:'Lista de nombres', nombres: nombres});
});

router.post('/',function(req,res){
  res.send('Tengo una petición con POST');
});

router.put('/greeting', function(req,res){
  res.send('Te doy un saludo con Greeting');
});

router.delete('/hello', function(req,res){
  res.send('Te doy un saludo con DELETE');
});*/

module.exports = router;
