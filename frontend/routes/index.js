const router = require('express').Router();

const path = require('path');

const camioneroRouter = require('./camioneros.routes')
const paqueteRouter = require ('./paquete.routes')
const provinciaRouter = require ('./Provincia.routes')


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/listarCamioneros.html'));
})


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/editarCamioneros.html'));
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/crearCamioneros.html'));

})

router.use('/camioneros', camioneroRouter)
router.use('/paquetes', paqueteRouter)
router.use('/provincias', ProvinciaRouter)




module.exports = router;