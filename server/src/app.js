const express = require('express');
const morgan = require('morgan');
const path = require('path');


const noteRouter = require('./routes/note.route');

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/notes', noteRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'мяу')
})

module.exports = app;
