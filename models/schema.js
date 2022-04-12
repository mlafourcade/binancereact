const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema and model
const UserData = new Schema({
    email: String,
    username: String,
    userpass: String,
});

const DataReg = mongoose.model('userdata', UserData);

module.exports = DataReg;
