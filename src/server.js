import express  from 'express';
import cors from 'cors';
//import testMongoDB from './srcServer/testMongoDB'
require('./srcServer/testMongoDB');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        hello: 'JS World',
    });
});

app.get('/counter', (req, res) => {
    getCounter();
    res.send('Привет это //counter');
});

app.get('/counter/:idcounter', (req, res) => {
    let idcounter = req.params.idcounter || 0;
    getCounter1(Number(idcounter),  function(result) {
        console.log('Result:');
        console.log(result);
        if(result == undefined) {
            res.status(404).send('Not Found');
        }
        else
         res.json(result);
    });
});
app.get('/map/:idmap', (req, res) => {
    let idmap = req.params.idmap || 0;
    const db = 'maps';
    const collection= 'maps_mo';
    getMap(db, collection, Number(idmap),  function(result) {
//       console.log("Result:");
//       console.log(result);
        if(result == undefined) {
            res.status(404).send('Not Found');
        }
        else
         res.json(result);
    });
});


app.get('/test', (req, res) => {
    testMongoDb();
    res.json({
        hello: 'Mongo answer',
    });
});


app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});


// Модули для доступа к Mongo
var getCounter = function() {
   // Connection URL
    var url = 'mongodb://localhost:27017/test';
   // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err, 'Failed Connection to MongoDB Server');
        console.log('Connected correctly to server');
        findCounter(db, function() {
            db.close();
        });
    });
};
var findCounter = function(db, callback) {
   // Get the documents collection
    var collection = db.collection('counter');
   // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null, 'Error access to collection counter');
        console.log('Found the following records');
        console.dir(docs);
        callback(docs);
    });
};

var getCounter1 = function(id, callback) {
   // Connection URL
    var url = 'mongodb://localhost:27017/test';
    var res = [];
   // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err, "Failed Connection to MongoDB Server");
        if( err == null) {
            console.log('Connected correctly to server');
            findCounter1(db, id,  function(result) {
                console.log(result[0]);
                db.close();
                callback(result[0]);
            });
        }
        else {
            callback(undefined);
        }
    });

};
var findCounter1 = function(db, id, callback) {
   // Get the documents collection
    var collection = db.collection('counter');
   // Find some documents
    collection.find({ idcounter: id }).limit(1).toArray(function(err, docs) {
        assert.equal(err, null, 'Error access to collection counter');
        console.log('Found the following records');
        console.dir(docs);
        callback(docs);
    });
};

var getMap = function(dbName, collectionName, id, callback) {
   // Connection URL
    var url = `mongodb://localhost:27017/${dbName}`;
    var res = [];
   // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err, "Failed Connection to MongoDB Server");
        if( err == null) {
            console.log('Connected correctly to server');
            var collection = db.collection(collectionName);
            findMap(db, collection, id,  function(result) {
//         console.log(result[0]);
                db.close();
                callback(result[0]);
            });
        }
        else {
            callback(undefined);
        }
    });

};
var findMap = function(db, collection, id, callback) {
   // Find some documents
    collection.find({ id: id }).limit(1).toArray(function(err, docs) {
        assert.equal(err, null, 'Error access to collection counter');
  //   console.log("Found the following records");
  //   console.dir(docs); Command from MongoDb npm packet doc
        callback(docs);
    });
};
