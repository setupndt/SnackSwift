const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database.database, config.database.user, {
    host: config.database.host,
    dialect: 'mysql'
});

module.exports = sequelize;