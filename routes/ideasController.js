const router = require('express').Router({ mergerParams: true })
const { User, Idea } = require('../db/model')


router.post('/', (rq, res) => {
    const newIdea = new Idea()
    User.findById(req.params.userId)
        .then((user) => {
            user.ideas.push(newIdea)
            return user.save()
        })
        .then((user) => {
            res.send(user)
        })

})

router.delete('/:id', (rq, res) => {
    User.findById(req.params.userId)
        .then(user => {
            user.update({ $pull: { ideas: { _ide: req.params.id } } })
        })
        .then(user => {
            res.send(user)
        })
})

module.exports = router