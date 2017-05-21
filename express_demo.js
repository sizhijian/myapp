var express = require('express'),
app = express();
app.get('/', function(req, res) {
	res.send("<h1>title</h1>")
})
app.listen(3000, function() {
	console.log("The service is listening on http://localhost:3000")
});
