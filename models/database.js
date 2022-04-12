const mongoose = require('mongoose');
const dataformat = require('./schema');

const uri = "mongodb+srv://mlafourcade:xXugqpTxalizGWHK@cluster0.931bp.mongodb.net/UserRegister?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(uri, options).then(
    () => { 
        console.log("Mongo db Connection Successfully");
    },
    err => { 
        console.log("Mongo db Connection Error");
    }
);

const ReadMongodbData = function (parameter) {

    return new Promise((resolve, reject)=>{  
      dataformat.find({Interval:parameter}).then(function(result){
          console.log(result);
          resolve(result);
      }).catch(function(error){
          console.log(error);
          reject(error);
      });
    });
}

const InsertMongodbData = function (JsonData) {
     
    JsonData.save(function(error) {
      if(error) {
          console.log('InsertMongoDB Error: ' + error)
      }else {
        console.log('InsertMongoDB Success');
      }
    });    
};

module.exports = {
    InsertMongodbData,
    ReadMongodbData,
};

  