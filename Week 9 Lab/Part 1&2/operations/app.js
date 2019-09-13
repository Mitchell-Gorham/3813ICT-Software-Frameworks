const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';    // Connection URL
const dbName = 'mydb';      // Database Name
const colName = 'product';  // Collection Name
const client = new MongoClient(url);    // Create a new MongoClient
const server = require('../server'); 

const assert = require('assert');

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const col = db.collection(colName);
    server(client, col);
});