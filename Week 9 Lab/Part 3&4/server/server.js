const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors')

const server = require('./listen.js');
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(cors());

app.use(function(req,res,next ) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/*
const products = require('./routes')
app.post('/products', products.insert);
app.get('/productFind', products.find);
app.post('/productUpdate', products.update);
app.post('/productDelete', products.delete);
*/

server.listen(http, PORT);

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);

        require('./routes/api-add.js')(db,app);
        require('./routes/api-deleteitems.js')(db,app,ObjectID);
        //require('./routes/api-getitem.js')(db,app,ObjectID);
        require('./routes/api-getlist.js')(db,app);
        require('./routes/api-prodcount.js')(db,app);
        require('./routes/api-update.js')(db,app,ObjectID);
        require('./routes/api-validid.js')(db,app);
})