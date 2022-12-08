'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const coffeeSchema = require('./coffee.js');
const catSchema = require('./cat.js');
const Collection = require('./Collection.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;


// let herokuOptions = {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// };

const sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true, rejectUnauthorized: false,
    },
  },
}
  : {

  };

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);



// let sequelize = new Sequelize(DATABASE_URL);

const CatModel = catSchema(sequelize, DataTypes);
const CoffeeModel = coffeeSchema(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  Coffee: new Collection(CoffeeModel),
  Cat: new Collection(CatModel),
};