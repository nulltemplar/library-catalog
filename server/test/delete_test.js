const assert = require('assert');
const Book = require('../api/models/apiModel');

describe('Deleting a book', () => {
  let book;

  beforeEach((done) => {
    book = new Book({ title: 'Book to be deleted', author: 'Book to be deleted', year: '2020' });
    book.save()
      .then(() => done());
  });

  it('Removes a book using its instance', (done) => {
    book.remove()
      .then(() => Book.findOne({ title: 'Book to be deleted' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Removes multiple books', (done) => {
    Book.remove({ title: 'Book to be deleted' })
      .then(() => Book.findOne({ title: 'Book to be deleted' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Removes a book', (done) => {
    Book.findOneAndRemove({ title: 'Book to be deleted' })
      .then(() => Book.findOne({ title: 'Book to be deleted' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Removes a book using bookid', (done) => {
    Book.findByIdAndRemove({ _id: book._id})
      .then(() => Book.findOne({ title: 'Book to be deleted' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  })
})