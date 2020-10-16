const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/library_catalog_test', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn(`Error : ${error}`);
    });

beforeEach((done) => {
      mongoose.connection.collections.books.drop(() => {
        done();
    }); 
});