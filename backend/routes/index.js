const router = require('express').Router()
const camioneroRouter = require('./Camionero.routes')
const paqueteRouter = require('./paquete.routes')
const provinciaRouter = require('./provincia.routes')


router.use('/camioneros', camioneroRouter)
router.use('/paquetes', paqueteRouter)
router.use('/provincias', provinciaRouter)


module.exports = router;