
const router = require('express').Router();
const {Camionero, Paquete, Provincia } = require('../database/models');

router.get('/', (req, res) => {
    Paquete.findAll({
        attributes: ['codigoPaquete', 'descripcion', 'destinatario', 'direccionDestinatario'],
        include: {
            model: Provincia,
            attributes: ['codigoProvincia', 'nombre'],
        },
        include: {
                model: Camionero,
                attributes: ['dni', 'nombre'], 
        }
    }).then(list => {
        res.json(list);
    });
});

router.post('/create', (req, res) => {
    Paquete.create({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        destinatario: req.body.destinatario,
        direccion: req.body.direccion
    }).then(paquete => {
        res.json(paquete);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/delete/:codigoPaquete', (req, res) => {
    Paquete.destroy({
        where: {
            codigoPaquete: req.params.codigoPaquete
        }
    }).then((object) => {
        res.json(object);
    })
});

router.get('/:codigoPaquete', (req, res) => {
    Paquete.findByPk(req.params.codigoPaquete).then(paquete => {
        res.json(paquete);
    });
});

router.put('/edit/:codigoPaquete', (req, res) => {
    Paquete.update({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        destinatario: req.body.destinatario,
        codigoProvincia: req.body.codigoProvincia,
        direccion: req.body.direccion
    }, {
        where: {
            codigoPaquete: req.params.codigoPaquete
        }
    }).then((object) => {
        res.json(object);
    })
});


module.exports = router;