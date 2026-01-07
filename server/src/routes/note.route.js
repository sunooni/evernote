const noteRouter = require('express').Router();
const NoteController = require('../controller/note.controller')

noteRouter.route('/')
.get(NoteController.getNotes)
.post(NoteController.createNote)

noteRouter.route('/:id')
.get(NoteController.getNotesById)
.put(NoteController.updateNote)
.delete(NoteController.deleteNote)

module.exports = noteRouter;