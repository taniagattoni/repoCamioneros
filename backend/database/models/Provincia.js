const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Provincia extends Model {}



Provincia. init({
       codigoProvincia: {
      type: DataTypes.STRING,
      allowNull: false,
      
        
    }, 
     nombre: {
      type: DataTypes.STRING,
     allowNull: false,
  }

    
        },{
        
            sequelize,
          modelName:'provincia',
          tableName:'provincias'
           })

         
          
          module.exports = Provincia;