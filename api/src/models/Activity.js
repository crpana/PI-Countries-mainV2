const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {

        name: {
            type: DataTypes.STRING,

        },
        difficulty: {
            type: DataTypes.FLOAT,

            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.FLOAT,

        },
        season: {
            type: DataTypes.ENUM('Verano', ' Otoño', 'Invierno', 'Primavera'),

        },
    


    })
}
