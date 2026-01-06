const { Op } = require('sequelize');
const { Track } = require('../../db/models');

class TrackService {
  static getAll() {
    return Book.findAll();
  }


  static getById(id) {
    return Book.findByPk(id)
  }

  static create(data) {
    return Book.create(data)
  }
}

module.exports = TrackService;