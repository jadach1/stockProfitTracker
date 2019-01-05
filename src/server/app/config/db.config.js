const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const dbb = {};
 
dbb.Sequelize = Sequelize;
dbb.sequelize = sequelize;
 
//Models/tables
dbb.customers = require('../model/customer.model.js')(sequelize, Sequelize);
 
module.exports = dbb;
