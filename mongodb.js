var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/userInfo'; 

//要连接的集合
var colName = "user";
//insert 
var insertData = function(db, callback) { 
	//连接到集合
	var collection = db.collection(colName);
    //插入数据
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
//delete
var deleteData = function(db, callback) {
	//连接到表  
	var collection = db.collection(colName);
	//删除数据
	var whereStr = {
		"name": '菜鸟工具'
	};
	collection.remove(whereStr, function(err, result) {
		if(err) {
			console.log('Error:' + err);
			return;
		}
		callback(result);
	});
}
//update
var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection(colName);
    //更新数据
    var whereStr = {"name":'菜鸟工具'};
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
//find
var selectData = function(db, callback) {
	//连接到集合
	var collection = db.collection(colName);
	//查询数据
	var whereStr = null; //条件
	collection.find(whereStr).toArray(function(err, result) {
		if(err) {
			console.log('Error:' + err);
			return;
		}
		callback(result);
	});
}
//connect
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
 // insertData(db, function(result) {
	selectData(db,function(result){
//	updateData(db,function(result){
// 	deleteData(db,function(result){
		console.log(result);
		db.close();
	})

});
//{
//	res
//	ult: {
//		ok: 1,
//		n: 2
//	}, ops: [{
//		name: '菜鸟教程',
//		url: 'www.runoob.com',
//		_id: 591e81 b06f9fc90d8c80cfc9
//	}, {
//		na
//		me: '菜鸟工具',
//		url: 'c.runoob.com ',                                                            
//		_id: 5
//		91e81 b06f9fc90d8c80cfca
//	}], insertedCou
//	nt: 2, insertedIds: [591e81 b06f9fc90d8c80cfc9, 591e81 b06f9fc90d8c80cfca]
//}

