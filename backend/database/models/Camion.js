
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')


class Camion extends Model {}


Camion.init({
    matricula: {
        type : DataTypes.STRING,
        allownull: false
    },
     
    modelo: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    potencia: {
        type:DataTypes.FLOAT,
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'camion',
    tableName: 'camiones'
    
    
})

module.exports = Camion;