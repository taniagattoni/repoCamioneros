const {Camionero, Paquete, Camion, Provincia} = require('./models');

Provincia.hasMany(Paquete, {foreignKey: 'codigoProvincia'});
Camionero.hasMany(Paquete, {foreignKey: 'dni'});
 


Paquete.belongsTo(Provincia, {foreignKey: 'codigoProvincia'});
Paquete.belongsTo(Camionero, {foreignKey: 'dni'});



Camion.belongsToMany(Camionero, {through: 'camionXcamionero', foreignKey: 'matricula_camion'});
Camionero.belongsToMany(Camion, {through: 'camionXcamionero', foreignKey: 'dni_camionero'});







