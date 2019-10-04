const Movie = require('../models/Movie');
const Book = require('../models/Book');

const bookData = require('./books.json')
const movieData = require('./movies.json')

Movie.deleteMany({}).then(() => {
    return Movie.insertMany(movieData)
}).then(() => {
    process.exit()
})

Book.deleteMany({}).then(() => {
    return Book.insertMany(bookData)
}).then(() => {
    process.exit()
})