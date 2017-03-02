const testMongoDb = function () {
  let MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

  // Connection URL
  const url = 'mongodb://localhost:27017/test';
  // Use connect method to connect to the Server

  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err, 'Failed Connection to MongoDB Server');
    console.log('Connected correctly to server');
    insertDocuments(db, () => {
      db.close();
    });
  });
};

var insertDocuments = function (db, callback) {
  const assert = require('assert');
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents

  collection.insertMany([
    { a : 1 }, { a : 2 }, { a : 3 }
  ], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the document collection');
    callback(result);
  });
};

global.testMongoDb = testMongoDb;
