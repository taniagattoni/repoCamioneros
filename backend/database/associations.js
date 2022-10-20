const { Camionero, Paquete, Provincia } = require ('./models')

Camionero.hasMany(Paquete)
Paquete.belongsTo(Camionero)


Provincia.hasMany(Paquete, {through: paqueteProvincia, foreignKey: 'provinciaId'})
Paquete.belongsTo(Provincia, { through: paqueteProvincia, foreignKey: 'paqueteId'})

