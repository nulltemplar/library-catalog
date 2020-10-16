const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./api/models/apiModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/apiRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/library_catalog', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.listen(port);

console.log(`Server started on port: ${port}`);