const express = require('express');
const router = express.Router();
const BookController = require('../controller/book.controller');

router.get('/', BookController.getAllBooks);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);


module.exports = router;
