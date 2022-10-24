const express = require ('express')
const router = require('express').Router();
const {Camion, Paquete, Provincia } = require('../database/models');

router.get('/', (req, res) => {
    Provincia.findAll({
        attributes: ['codigoprovincia', 'nombre'],
        include: {
            model: Camion,
            attributes: ['matricula', 'modelo', 'tipo', 'potencia'],
        },
        include: {
                model: Paquete,
                attributes: ['codigopaquete', 'destinatario']  
        }
    }).then(list => {
        res.json(list);
    });
});

router.post('/crear', (req, res) => {
    Provincia.create({
        codigoprovincia: req.body.codigoprovincia,
        nombre: req.body.nombre,
    }).then(provincia => {
        res.json(provincia);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/:codigoprovincia', (req, res) => {
    Provincia.destroy({
        where: {
            codigoprovincia: req.params.codigoprovincia
        }
    }).then((object) => {
        res.json(object);
    })
});

router.get('/:codigoprovincia', (req, res) => {
    Provincia.findByPk(req.params.codigoprovincia).then(provincia => {
        res.json(provincia);
    });
});

router.put('/edit/:codigoprovincia', (req, res) => {
    Provincia.update({
        codigoprovincia: req.body.codigoprovincia,
        nombre: req.body.nombre,
    }, {
        where: {
            codigoprovincia: req.params.codigoprovincia
        }
    }).then((object) => {
        res.json(object);
    })
});


module.exports = router;