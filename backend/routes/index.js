const router = require('express').Router()
const camioneroRouter = require('./Camionero.routes')


router.use('/camioneros', camioneroRouter)


module.exports = router;