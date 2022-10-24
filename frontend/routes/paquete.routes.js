const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/listarPaquete.html'));
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/crearPaquete.html'));
})

router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/editarPaquete.html'));
})



module.exports = router;