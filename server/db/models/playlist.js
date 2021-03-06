const Sequelize = require('sequelize')
const db = require('../db')

const Playlist = db.define('playlist', {
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  spotifyPlaylistId: {
    type: Sequelize.STRING,
    allowNull: true
  },
  spotifyPlaylistUri: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Playlist
