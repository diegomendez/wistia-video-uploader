var express = require('express');  
var app = express();  
  
app.use(express.static("App"));  
  
app.get('/', function (req, res) {  
	res.sendFile('./app/index.html');
});  
  
app.listen(process.env.PORT || 8080, function() {
console.log("WistiaUploader Server is running on port %d in %s mode"); 
});
