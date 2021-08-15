'use strict'

const autheModel = (sequelize, DataTypes) => sequelize.define('newusers', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports =autheModel
