const express = require('express');
const morgan = require('morgan');
const path = require('path');


const bookRouter = require('./routes/book.route');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/books', bookRouter);


module.exports = app;
