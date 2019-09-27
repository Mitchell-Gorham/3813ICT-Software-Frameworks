const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors')

const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const io = require('socket.io')(http);
const sockets = require('./socket.js');

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);
        sockets.connect(app, io,db);

        require('./routes/api-add.js')(db,app);
        require('./routes/api-deleteitems.js')(db,app,ObjectID);
        require('./routes/api-getitem.js')(db,app,ObjectID);
        require('./routes/api-getlist.js')(db,app);
        require('./routes/api-prodcount.js')(db,app);
        require('./routes/api-update.js')(db,app,ObjectID);
        require('./routes/api-validid.js')(db,app);
    
    require('./listen.js')(http); 
})