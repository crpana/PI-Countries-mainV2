const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,     //--->falta agregar el tipo de dato
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {       //aca no tiene acento en el readme si tiene
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,

    },
    population: {
      type: DataTypes.INTEGER,
    },

  });
};
