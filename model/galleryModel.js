const mongoose = require("mongoose");

const galleryModel = new mongoose.Schema({
    title: {
        type : String,
        required :[1,"Please enter title "]
    },
    author: {
        type : String,
        required :[1,"Please enter Author"]
    },
    image: {
        type : String,
        required :[1,"Please upload image "]
    },
});

const Gallery = mongoose.model("Gallery", galleryModel);

module.exports = Gallery;
