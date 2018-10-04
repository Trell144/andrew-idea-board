const router = require('express').Router()
const { User } = require('../db/model')

router.get('/', async (req, res) => {
  const response = await User.find()
  res.send(response)
})

// router.get('/', (req, res) => {
//   user.find
//   .then((response) => {
//     res.send(response)
// })
// })



//SHOW ONE

router.get('/', async (req, res) => {
  const user = await User.findById(req, params.id)
  res.send(user)
})


//CREATE
router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)

})

//UPDATE
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(user)
})

//DELETE
router.delete('/:id', async (req, res) => {
  await User.findByIdAndUpdateRemove(req, params.id)
  res.sendStatus(200)
})


module.exports = router
