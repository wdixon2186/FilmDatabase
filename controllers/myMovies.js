const express = require('express')
const router = express.Router();

const Movies = require('../models/Movie.js');

router.get('/', (req,res) => {
    Movies.find({}).then(myMovies => res.render('indexMovies', {myMovies}))
})

router.post('/', (req, res) => {
    Movies.create(req.body).then(newMovie => {
        res.json(newMovie);
    })
})

router.get('/:title', (req,res) => {
    Movies.findOne({title: req.params.title}).then(movieName => res.render('showMovies', {movieName}))
})

router.put('/:title',(req,res) => {
    Movies.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(() => {
        res.redirect('/movies')
    })
})

router.delete('/:title', (req,res) => {
    Movies.findOneAndRemove({ title: req.params.title}).then(() => {
        res.redirect('/')
    })
})

module.exports = router;