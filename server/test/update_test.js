const assert = require('assert');
const Book = require('../api/models/apiModel');

describe('Updating a book', () => {

  let book;

  beforeEach((done) => {
    book = new Book({ title: 'Old Title', author: 'Book to be updated', year: '2020' });
    book.save()
      .then(() => done());
  });
  
  function assertHelper(statement, done) {
    statement
     .then(() => Book.find({}))
     .then((books) => {
      assert(books.length === 1);
      assert(books[0].title !== 'Old Title');
      done();
    });
  }
  
  it('Sets and saves books using an instance', (done) => {
    book.set('title', 'Title updated using an instance');
    assertHelper(book.save(), done);
   });
 
  it('Updates book using instance', (done) => {
    assertHelper(book.update({ title: 'Another new book title' }), done);
  });

  it('Updates all matching books using model', (done) => {
    assertHelper(Book.update({ title: 'Old Title' }, { title: 'Updated title of many books' }), done);
  });

  it('Updates one book using model', (done) => {
    assertHelper(Book.findOneAndUpdate({ title: 'Old Title' }, { title: 'Book title updated vie model' }), done);
  });

  it('Updates one book with id using model', (done) => {
    assertHelper(Book.findByIdAndUpdate(book._id, { title: 'New title' }), done);
  });
});