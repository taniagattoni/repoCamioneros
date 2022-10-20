
const router = require('express').Router();
const {Camionero} = require('../database/models');



router.get("/", (req, res) => {
    Camionero.findAll({
        attributes: ['dni', 'nombre', 'salario', 'direccion', 'telefono', 'poblacion'],
       }).then(list => {
        res.json(list);
    });
});

router.post('/create', (req, res) => {
    Camionero.create({
        dni: req.body.dni,
        nombre: req.body.nombre,
        salario: req.body.salario,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        poblacion: req.body.poblacion
    }).then(camionero => {
        res.json(camionero);
    }).catch(error => {
        res.json(error);
    });
});





router.put('/:id', (req, res) => {
    console.log(req.body)
    Camionero.update({
        nombre: req.body.nombre,
        salario: req.body.salario,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        poblacion: req.body.poblacion
    }, {
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    })
});

router.delete('/:id', (req, res) => {
    Camionero.destroy({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    })
});


module.exports = router;