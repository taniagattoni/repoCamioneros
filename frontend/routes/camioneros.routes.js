const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/listaCamioneros.html'));
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/crearCamioneros.html'));
})

router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/editarCamioneros.html'));
})

router.delete('/delete/:dni', (req, res) => {
    Camionero.destroy({
        where: {
            dni: req.params.dni
        }
    }).then((object) => {
        res.json(object);
});
});



module.exports = router;