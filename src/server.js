import express  from 'express';
import cors from 'cors';
// import testMongoDB from './srcServer/testMongoDB'
require('./srcServer/testMongoDB');
let MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World'
  });
});

app.get('/counter', (req, res) => {
  getCounter();
  res.send('Привет это //counter');
});

app.get('/counter/:idcounter', (req, res) => {
  const idcounter = req.params.idcounter || 0;

  getCounter1(Number(idcounter),  (result) => {
    console.log('Result:');
    console.log(result);
    if (result == undefined) {
      res.status(404).send('Not Found');
    }    else         {
      res.json(result);
    }
  });
});
app.get('/map/:idmap', (req, res) => {
  const idmap = req.params.idmap || 0;
  const db = 'maps';
  const collection = 'maps_mo';

  getMap(db, collection, Number(idmap),  (result) => {
//       console.log("Result:");
//       console.log(result);
    if (result == undefined) {
      res.status(404).send('Not Found');
    }    else         {
      res.json(result);
    }
  });
});


app.get('/test', (req, res) => {
  testMongoDb();
  res.json({
    hello: 'Mongo answer'
  });
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});


// Модули для доступа к Mongo
var getCounter = function () {
   // Connection URL
  const url = 'mongodb://localhost:27017/test';
   // Use connect method to connect to the Server

  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err, 'Failed Connection to MongoDB Server');
    console.log('Connected correctly to server');
    findCounter(db, () => {
      db.close();
    });
  });
};
var findCounter = function (db, callback) {
   // Get the documents collection
  const collection = db.collection('counter');
   // Find some documents

  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null, 'Error access to collection counter');
    console.log('Found the following records');
    console.dir(docs);
    callback(docs);
  });
};

var getCounter1 = function (id, callback) {
   // Connection URL
  const url = 'mongodb://localhost:27017/test';
  const res = [];
   // Use connect method to connect to the Server

  MongoClient.connect(url, (err, db) => {
//     assert.equal(null, err, "Failed Connection to MongoDB Server");
    if (err == null) {
      console.log('Connected correctly to server');
      findCounter1(db, id,  (result) => {
        console.log(result[0]);
        db.close();
        callback(result[0]);
      });
    }    else {
      callback(undefined);
    }
  });
};
var findCounter1 = function (db, id, callback) {
   // Get the documents collection
  const collection = db.collection('counter');
   // Find some documents

  collection.find({ idcounter: id }).limit(1).toArray((err, docs) => {
    assert.equal(err, null, 'Error access to collection counter');
    console.log('Found the following records');
    console.dir(docs);
    callback(docs);
  });
};

var getMap = function (dbName, collectionName, id, callback) {
   // Connection URL
  const url = `mongodb://localhost:27017/${dbName}`;
  const res = [];
   // Use connect method to connect to the Server

  MongoClient.connect(url, (err, db) => {
//     assert.equal(null, err, "Failed Connection to MongoDB Server");
    if (err == null) {
      console.log('Connected correctly to server');
      const collection = db.collection(collectionName);

      findMap(db, collection, id,  (result) => {
//         console.log(result[0]);
        db.close();
        callback(result[0]);
      });
    }    else {
      callback(undefined);
    }
  });
};
var findMap = function (db, collection, id, callback) {
   // Find some documents
  collection.find({ id }).limit(1).toArray((err, docs) => {
    assert.equal(err, null, 'Error access to collection counter');
  //   console.log("Found the following records");
  //   console.dir(docs); Command from MongoDb npm packet doc
    callback(docs);
  });
};
