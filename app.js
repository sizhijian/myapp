var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var user = require("./user");
//mongoDB
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/demo');

// var db = mongoose.connection; 

// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//   // console.log("mongodb连接成功!");
// });

// var userSchema = mongoose.Schema({
//   name:String
// });//定义模式

// var User = mongoose.model('connectionName',userSchema);//将模式编译到模型中model('集合名称',...)会变成全小写

// var xumin = new User({name:'续敏1号'})//实例化一个模型对象
// // xumin.save(function(err,e){
// //  if (err) return console.error(err);
// //  console.log("mongodb插入成功!\n" + e);
// // });
// User.find(function(err,e){
//   if (err) return console.error(err);
//   console.log("mongodb查询成功!");
//   console.log(e);
// });

var index = require('./routes/index');

/*var express = require('express');
var router = express.Router();
/!* GET home page. *!/
router.get('/', function(req, res, next) {
    res.render('index', { title: '1' });
});
module.exports = router;*/
var users = require('./routes/users');
var carsrcetails = require('./routes/carsrcetails');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//设置静态资源路径
// myMongoDB();
app.use('/', index);
app.use('/users', users);
app.use('/carsrcetails',carsrcetails);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000,function () {
    console.log("The service is  listing on port 3000")
    }
);
// myMongoDB.selectMongo();
// console.log(myMongoDB.selectMongo())
module.exports = app;
