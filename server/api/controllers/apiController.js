
const mongoose = require('mongoose');
const Book = mongoose.model('Books');

const requiredParams = {
    title: 'string',
    author: 'string',
    year: 'number'
}

exports.validateParams = (validationObject) => {
    try {
        if (!(validationObject instanceof Object)) throw 'A book must be an Object'
        for (const [key, value] of Object.entries(requiredParams)) {
            if (!(validationObject.hasOwnProperty(key))) throw `Field '${key}' is missing`
            if (typeof validationObject[key] !== value) throw `Field '${key}' must be of '${value}' type`
        }
    } catch (error) {
        return Error(error)
    }

    return false
}

exports.list_all = (req, res) => {
    Book.find({}, (err, book) => {
        if (err) res.send(err);
        res.json(book);
    });
};

exports.create = (req, res) => {
    try {
        this.validateParams(req.body)
        const new_book = new Book(req.body)
        new_book.save((err, book) => {
            if (err) res.send(err)
            res.json(book)
        });
    } catch (error) {
        console.log('Error', error)
    }
};

exports.read = (req, res) => {

    Book.find(req.body, (err, book) => {
        if (err) res.send(err);
        res.json(book);
    });
};

exports.update = (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, book) => {
        if (err)
            res.send(err);
        res.json(book);
    });
};

exports.delete = (req, res) => {
    Book.remove({
        _id: req.params.bookId
    }, (err, book) => {
        if (err)
            res.send(err);
        res.json({ message: 'Book successfully deleted' });
    });
};
