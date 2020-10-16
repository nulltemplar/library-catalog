const assert = require('assert');
const Book = require('../api/models/apiModel');
const controller = require('../api/controllers/apiController');
describe('Creating book entries', () => {

    it('Tries to validate a string against a book object, should return an error', (done) => {
        assert(controller.validateParams('').message === 'A book must be an Object')
        done()
    });

    it('Tries to validate a book without a title, should return an error', (done) => {
        assert(controller.validateParams({ author: 'Book author', year: '2020' }).message === `Field 'title' is missing`)
        done()
    });

    it('Tries to validate a book without an author, should return an error', (done) => {
        assert(controller.validateParams({ title: 'Book title', year: '2020' }).message === `Field 'author' is missing`)
        done()
    });

    it('Tries to validate a book without a year, should return an error', (done) => {
        assert(controller.validateParams({ title: 'Book title', author: 'Book author' }).message === `Field 'year' is missing`)
        done()
    });

    it('Tries to validate a book with a non-string title, should return an error', (done) => {
        assert(controller.validateParams({ title: 2222, author: 'Book author', year: '2020' }).message === `Field 'title' must be of 'string' type`)
        done()
    });

    it('Tries to validate a book with a non-string author, should return an error', (done) => {
        assert(controller.validateParams({ title: 'Book title', author: 7777, year: '2020' }).message === `Field 'author' must be of 'string' type`)
        done()
    });


    it('Tries to validate a book with a non-number year, should return an error', (done) => {
        assert(controller.validateParams({ title: 'Book title', author: 'Book author', year: 'twenty twenty' }).message === `Field 'year' must be of 'number' type`)
        done()
    });

    it('Tries to create a book entry and succeeds', (done) => {
        const book = new Book({ title: 'Book title', author: 'Book author', year: '2020' });
        book.save()
            .then(() => {
                assert(!book.isNew);
                done();
            });
    });

});