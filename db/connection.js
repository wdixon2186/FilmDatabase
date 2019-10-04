mongoose.connect('mongodb://localhost/filmDatabase')

mongoose.Promise = Promise;

module.exports = mongoose;