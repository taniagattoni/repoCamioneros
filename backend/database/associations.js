const {Camionero, Paquete, Camion, Provincia} = require('./models');

Provincia.hasMany(Paquete, {foreignKey: 'codigoProvincia'});
Camionero.hasMany(Paquete, {foreignKey: 'dni_camionero'});
 


Paquete.belongsTo(Provincia, {foreignKey: 'codigoProvincia'});
Paquete.belongsTo(Camionero, {foreignKey: 'dni_camionero'});



Camion.belongsToMany(Camionero, {through: 'camionCamionero', foreignKey: 'matricula'});
Camionero.belongsToMany(Camion, {through: 'camionCamionero', foreignKey: 'dni_camionero'});

