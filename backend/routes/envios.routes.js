const express = require ('express')
const { Paquete, Provincia, PaqueteProvincia} = require('../database/models');

router.get('/:id', (req, res) => {
PaqueteProvincia.findByPk(req.params,id, {
    include: [{
         model: Paquete,
         attributes: ["codigoPaquete", "descripcion", "destinatario", "origen"]
         },{
         model: Provincia,
         attributes: [ "codigoprovincia", "nombre"]
         },
         ]

         }).then((object) => {
          res.json(object);
         })
          });
    
          router.get('/', (req, res) => {
             PaqueteProvincia.findAll ({
             attributes: ["id"],
             include: [{
                model: Paquete,
                attributes: ["codigoPaquete", "descripcion", "destinatario", "origen"]
               },{
                model: Provincia,
                attributes: [ "codigoprovincia", "nombre"]
               },
                ]
        
               }).then((object) => {
               res.json(object);
              })
               });

               router.post('/create', (req, res) => {
                PaqueteProvincia.create({
                    PaqueteId: req.body.PaqueteId,
                    ProvinciaId: req.body.ProvinciaId,
                    
                }).then(provincia => {
                    res.json(provincia);
                }).catch(err => {
                    res.json(err);
                });
            });
        
router.put('/update/:id', (req, res) => {
    console.log(req.body)
    PaqueteProvincia.update
    codigoPaquete: req.body.codigoPaquete
   codigoprovincia: req.body.codigoprovincia
    }, {
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })



module.exports = router;