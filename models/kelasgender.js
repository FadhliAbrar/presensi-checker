const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kelasgenderSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    NIM:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("KelasGender", kelasgenderSchema);