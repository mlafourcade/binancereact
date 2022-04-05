const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema and model
const cadastroUser = new Schema({
    Interval: String,
    Open: Number,
    High: Number,
    Low: Number,
    Close: Number,
    Timestamp: Date,
    Volume: Number,
});

const DataReg = mongoose.model('cadastroUser', cadastroUser);

module.exports = DataReg;

module.exports = {
    DataReg

}