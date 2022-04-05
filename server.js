const express = require('express');
const app = express();

const dataformat = require('./models/schema');
const DBMongo = require('./models/database');





app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   
   //let SchemaAux = new dataformat();
   //DBMongo.InsertMongodbData(SchemaAux);

   console.log("Example app listening at http://%s:%s", host, port)
})