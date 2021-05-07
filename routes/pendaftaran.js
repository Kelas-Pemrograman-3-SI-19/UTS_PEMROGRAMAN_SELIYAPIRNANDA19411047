const router = require('express').Router()
const pendaftaranController = require('../controller/pendaftaran')

router.post('/insert', (req, res) => {
    pendaftaranController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    pendaftaranController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    pendaftaranController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router