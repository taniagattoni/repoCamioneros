const router = require('express').Router();

const path = require('path');

const camioneroRouter = require('./camioneros.routes')
const paqueteRouter = require ('./paquete.routes')




router.use('/camioneros', camioneroRouter)
router.use('/paquetes', paqueteRouter)





module.exports = router;