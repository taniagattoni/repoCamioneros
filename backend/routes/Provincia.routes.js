const express = require ('express')
const router = require('express').Router();
const {Camion, Camionero, Paquete, Provincia } = require('../database/models');

router.get('/', (req, res) => {
    Provincia.findAll({
        attributes: ['codigoProvincia', 'nombre'],
        include: {
            model: Camion,
            attributes: ['matricula', 'modelo', 'tipo', 'potencia'],
        },
        include: {
                model: Paquete,
                attributes: ['codigoPaquete', 'destinatario']  
        }
    }).then(list => {
        res.json(list);
    });
});

router.post('/create', (req, res) => {
    Provincia.create({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
    }).then(provincia => {
        res.json(provincia);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/:codigoProvincia', (req, res) => {
    Provincia.destroy({
        where: {
            codigoProvincia: req.params.codigoProvincia
        }
    }).then((object) => {
        res.json(object);
    })
});

router.get('/:codigoProvincia', (req, res) => {
    Provincia.findByPk(req.params.codigoProvincia).then(provincia => {
        res.json(provincia);
    });
});

router.put('/edit/:codigoProvincia', (req, res) => {
    Provincia.update({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
    }, {
        where: {
            codigoProvincia: req.params.codigoProvincia
        }
    }).then((object) => {
        res.json(object);
    })
});


module.exports = router;