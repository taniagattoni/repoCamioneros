
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Camionero extends Model {}



Camionero.init({
     dni: DataTypes.NUMBER,
      allowNull: false,

      nombre: DataTypes.STRING,
      allowNull:false,

      telefono: DataTypes.DECIMAL,
      allowNull:false,
    
      direccion: DataTypes.STRING,
      allowNull:false,
    
      salario: DataTypes.DECIMAL,
      allowNull:false,

      poblacion: DataTypes.STRING,
      allowNull:false

      },{
   sequelize,
          modelName:'camionero',
          tableName:'camioneros'
           })

         
          
          module.exports = Camionero