const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: 'Title of the book'
  },
  author: {
    type: String,
    required: 'Author of the book'
  },
  year: {
    type: Number,
    required: 'The year when the book was published'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Books', BookSchema);