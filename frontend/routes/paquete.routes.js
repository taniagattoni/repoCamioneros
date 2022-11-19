const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/listaPaquete.html'));
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/crearPaquete.html'));
})

router.get('/edit/:codigoPaquete', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/editarPaquete.html'));
})


router.delete('/delete/:codigoPaquete', (req, res) => {
    Paquete.destroy({
        where: {
            codigo: req.params.codigo
        }
    }).then((object) => {
        res.json(object);
});
});

module.exports = router;