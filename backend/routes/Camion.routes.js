
const router = require('express').Router();
const {Camionero, Camion, Paquete } = require('../database/models');

router.get('/', (req, res) => {
    Camion.findAll({
        attributes: ['matricula', 'modelo', 'tipo', 'potencia'],
        include: {
            model: Paquete,
            attributes: ['codigopaquete', 'peso', 'fechaentrega', 'codigoprovincia'],
        },
        include: {
                model: Camionero,
                attributes: ['dni', 'nombre']  
        }
    }).then(list => {
        res.json(list);
    });
});

router.post('/crear', (req, res) => {
    Camion.create({
        matricula: req.body.matricula,
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        potencia: req.body.potencia,
    }).then(camion => {
        res.json(camion);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/:dni', (req, res) => {
    Camion.destroy({
        where: {
            matricula: req.params.matricula
        }
    }).then((object) => {
        res.json(object);
    })
});

router.get('/:matricula', (req, res) => {
    Camion.findByPk(req.params.matricula).then(camion => {
        res.json(camion);
    });
});

router.put('/edit/:matricula', (req, res) => {
    Camion.update({
        matricula: req.body.matricula,
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        potencia: req.body.potencia,
    }, {
        where: {
            dni: req.params.matricula
        }
    }).then((object) => {
        res.json(object);
    })
});


module.exports = router;