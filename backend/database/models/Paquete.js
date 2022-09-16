// Imports 
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Paquete extends Model {}

Paquete.init({
    codigoPaquete:  {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
     primaryKey: true
    },
    descripcion: { 
        type:DataTypes.STRING,
        allowNull: false
    },
    destinatario:{
     type:DataTypes.STRING,
     allowNull:false 
    },
    direccionDestinatario: {
        type: DataTypes.STRING,
        allowNull:false

     }
    },{
    
 
 sequelize,

 modelName: "paquete",
 tableName : "paquetes"

})

module.exports = Paquete;