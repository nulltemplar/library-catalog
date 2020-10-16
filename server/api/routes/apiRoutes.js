module.exports = function (app) {
    const apiController = require('../controllers/apiController');

    app.route('/books')
        .get(apiController.list_all)
        .post(apiController.create);

    app.route('/books/:bookId')
        .put(apiController.update)
        .delete(apiController.delete);

    app.route('/books/multiple')
        .post(apiController.read)
};