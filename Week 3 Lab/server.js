var express = require('express');  //used for routing
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));
    app.listen(3000,'127.0.0.1',function(){
        var d = new Date();
        var n = d.getHours();
        var m = d.getMinutes();
        console.log('Server has been started at : '+n+':'+m);
    })

//Route for default page (root of site)
app.get('/',function(req,res){
    res.sendFile(__dirname+"/www/form.html");
});

//Route to check user credentials and report if valid
app.post('/api/login',function(req,res){
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd= req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true;
    }else{
        customer.valid = false;
    }
    res.send(customer);
});