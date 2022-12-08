'use strict';

const catSchema = (sequelize, DataTypes) =>
  sequelize.define('Cat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = catSchema;