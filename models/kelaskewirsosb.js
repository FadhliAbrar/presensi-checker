const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kelasKewirsosb = new Schema({
    nama:{
        type: String,
        required: true
    },
    NIM:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("KewirsosB", kelasKewirsosb);