const express = require ('express')
const router = require('express').Router();
const {Camionero, Camion, Paquete, Provincia } = require('../database/models');

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

router.post('/crear', (req, res) => {
    Paquete.create({
        codigopaquete: req.body.codigopaquete,
        destinatario: req.body.destinatario,
    }).then(paquete => {
        res.json(paquete);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/:codigoprovincia', (req, res) => {
    Paquete.destroy({
        where: {
            codigopaquete: req.params.codigopaquete
        }
    }).then((object) => {
        res.json(object);
    })
});

router.get('/:codigopaquete', (req, res) => {
    Paquete.findByPk(req.params.codigopaquete).then(paquete => {
        res.json(paquete);
    });
});

router.put('/edit/:codigopaquete', (req, res) => {
    Paquete.update({
        codigopaquete: req.body.codigopaquete,
        destinatario: req.body.destinatario,
    }, {
        where: {
            codigopaquete: req.params.codigopaquete
        }
    }).then((object) => {
        res.json(object);
    })
});


module.exports = router;