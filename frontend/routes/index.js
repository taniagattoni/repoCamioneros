const router = require('express').Router();

const path = require('path');

const camioneroRouter = require('./camioneros.routes')
const paqueteRouter = require ('./paquete.routes')
const provinciaRouter = require('./provincias.routes')
const camionRouter = require ('./camiones.routes')


router.use('/camioneros', camioneroRouter)
router.use('/paquetes', paqueteRouter)
//router.use('/provincias')




module.exports = router;