const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  spotifySongId: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Song
