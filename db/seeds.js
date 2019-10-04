const Movie = require('../models/Movie.js');
const Book = require('../models/Book.js');

const bookData = require('./books.json')
const movieData = require('./movies.json')

Movie.deleteMany({}).then(() => {
    return Movie.insertMany(movieData)
}).then(() => {
    console.log("We have Movies")
    process.exit()
})

Book.deleteMany({}).then(() => {
    return Book.insertMany(bookData)
}).then(() => {
    console.log("We have Books")
    process.exit()
})