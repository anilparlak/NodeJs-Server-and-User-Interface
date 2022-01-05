const express = require('express') // Node js package
const bodyParser = require('body-parser') //  For body from request
const cors = require('cors'); // It gives the necessary security permissions to access from browsers..
const path = require('path'); 

const port = process.env.PORT || 3000; 
const app = express()

app.use(cors())
app.options('*', cors());  // allow all 
app.use(bodyParser.json());
/*
app.options('/page', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});*/

app.use(express.static(__dirname + '/public')); 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/chart',function(req,res){
  res.sendFile(path.join(__dirname+'/chart.html'));
});
app.use("/node1", require("./router")); // Node 1 directions
app.use("/node2", require("./router2"));// Node 2 directions
app.use("/node3", require("./router3"));// Node 3 directions
app.use("/button", require("./router_button")); // buton directions
app.use('/date', require("./dateRouter"))
app.listen(port, function() {
  console.log('Server çalışıyor')
})