var express = require('express');
var router = express.Router();
// var user = require("./models/index.js").user;

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/demo');

var db = mongoose.connection; 

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  // console.log("mongodb连接成功!");
});

var userSchema = mongoose.Schema({
  name:String
});//定义模式

var User = mongoose.model('connectionName',userSchema);//将模式编译到模型中model('集合名称',...)会变成全小写

var xumin = new User({name:'续敏1号'})//实例化一个模型对象
// xumin.save(function(err,e){
//  if (err) return console.error(err);
//  console.log("mongodb插入成功!\n" + e);
// });var
// var data_ ;
// var find_ = User.find(function(err,e){
//   if (err) return console.error(err);
//   console.log("mongodb查询成功!");
//   console.log(e);
//   data_ = e;
//  //  	router.get('/', function(req, res, next) {
//  //  		console.log(e);
// 	//   res.render('index', e);
// 	// });
// });
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(data_+"s____");
	// find_();
	var data_,obj_ =res;
	User.find(function(err,e){
  		if (err) return console.error(err);
		console.log("mongodb查询成功!");
		// data_=e;
		res.render('index', {data:e});
  	});
	
//res.render('carsrcetails', { title: '1' });
});
module.exports = router;
