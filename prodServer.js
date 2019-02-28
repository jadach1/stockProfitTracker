var express       = require("express");
var path          = require("path");
var app           = express();
var bodyParser     = require('body-parser');
app.use(bodyParser.json());

let port =  4200
let hostname ='localhost'

 app.use(express.static("./dist/portfolioCalculator/"));
     
app.get('*', function (req, res){
      res.sendFile(path.join(__dirname+'/dist/portfolioCalculator/index.html'));
});

// Create a Server
app.listen(port, hostname, function () {
    console.log("App listening at http://%s:%s", hostname, port);
});