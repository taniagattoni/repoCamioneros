const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/envios/listarEnvios.html'));
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/envios/crearEnvios.html'));
})

router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/envios/editarEnvios.html'));
})



module.exports = router;