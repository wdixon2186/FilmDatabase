const express = require('express')
const router = express.Router();

const Books = require('../models/Book.js');

router.get('/', (req,res) => {
    Books.find({})
    .then((myBooks)  => {
        res.render('indexBooks', {myBooks})
    })
})

router.post('/', (req, res) => {
    Books.create(req.body).then(newBook => {
        res.json(newBook);
    })
})

router.get('/:title', (req,res) => {
    Books.find({title: req.params.title}).then(bookName => res.render('ShowBooks', {bookName}))
})

router.get('/editBook/:title', (req, res) => {
    Books.findOne({title: req.params.title})
      .then(myBooks => {
        res.render("editBook", {myBooks })
      })
  })
router.put('/:title',(req,res) => {
    Books.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(() => {
        res.redirect('/books')
    })
})

router.delete('/:title', (req,res) => {
    Books.findOneAndRemove({ title: req.params.title}).then(() => {
        res.redirect('/books')
    })
})

module.exports = router;