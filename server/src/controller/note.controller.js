const NoteService = require('../services/note.service')

class NoteController {
    static async getNotes(req, res) {
        const notes = await NoteService.getNotes();
        res.json(notes)
    }

    static async getNotesById(req, res) {
        const note = await NoteService.getNotesById(req.params.id)
        res.json(note)
    }

    static async createNote(req,res) {
        const note = await NoteService.createNote(req.body)
        res.json(note)
    }

    static async updateNote(req, res) {
        const note = await NoteService.updateNote(req.params.id, req.body) 
        res.json(note)
    }

    static async deleteNote(req, res) {
        await NoteService.deleteNote(req.params.id) 
        res.json({message:'note deleted'})
    }
}

module.exports = NoteController;