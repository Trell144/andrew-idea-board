const router = require('express').Router()
const { User } = require('../db/model')

router.get('/', async (req, res) => {
  const response = await User.find()
  res.send(response)
})

router.get('/:id', async (req, res) => {
  const response = await User.findById(req.params.id)
  res.send(response)
})

router.post('/', async (req, res) => {
  const response = await User.create(req.body)
  res.send(response)
})

router.put('/:id', async (req, res) => {
  const response = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(response)
})

router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router
