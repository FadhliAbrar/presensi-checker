const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kelasbSchema = new Schema({
    nama:{
        type: String,
        required: true
    },
    NIM:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("KelasB", kelasbSchema);