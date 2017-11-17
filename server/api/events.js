const router = require('express').Router()
const { Event, User } = require('../db/models')

module.exports = router

// get all events associated with this user
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => user.getEvents())
  .then(events => res.json(events))
  .catch(next)
})

router.post('/', (req, res, next) => {

  Event.create(req.body)
    .then(event => {
      console.log("req user", req.user)
      event.setUsers([3], {through: {isHost: true}})
      return event
    })
    .then(event => {

      res.json(event)
    })
    .catch(next)
})


