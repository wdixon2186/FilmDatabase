const mongoose = require("../db/connection");


const BookSchema = new mongoose.BookSchema({
    title: String,
    numberOfPages: Number,
    author: String,
    genre: String,
    worthReading: Boolean,
    year: Number,
    hardcover: Boolean,
    paperback: Boolean
})

module.exports = mongoose.model('Book', BookSchema);