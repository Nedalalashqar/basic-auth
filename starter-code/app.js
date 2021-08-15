  'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = "postgres://localhost:5432/nedalalashqar";
let sequelize = new Sequelize(POSTGRES_URI, {});

module.exports={
  db:sequelize 
}