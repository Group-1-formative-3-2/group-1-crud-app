
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://ames28:yoobee01@cluster0.ml1mzyr.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     if (err) throw err;

// });

// const collection = client.db("amy-test").collection("amy-test-collection");

// module.exports = { collection, ObjectId }

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://KayZ:kekekeysZw@kayz.njeqifu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {

    if (err) throw err;

});

const collection = client.db("classlydb").collection("uxdesigner");

module.exports = { collection, ObjectId }