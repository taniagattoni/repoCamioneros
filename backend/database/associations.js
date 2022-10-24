const { Camionero, Paquete, Provincia } = require ('./models')

Camionero.hasMany(Paquete)
Paquete.belongsTo(Camionero)


Provincia.hasMany(Paquete)
Paquete.belongsTo(Provincia)

