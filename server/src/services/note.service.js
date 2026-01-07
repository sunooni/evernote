const { Notes } = require('../../db/models')

class NoteService {
  static async getNotes() {
    return Notes.findAll();
  }

  static async getNoteById(id) {
    return Notes.findByPk(id);
  }

  static async getNotesByCategoryId(id) {
    return Notes.findAll({
      where: {
        categoryId: id
      }
    });
  }

  static async createNote(note) {
    return Notes.create(note);
  }

  static async updateNote(id, note) {
    return Notes.update(note, {
      where: {
        id
      }
    });
  }

  static async deleteNote(id) {
    return Notes.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = NoteService;