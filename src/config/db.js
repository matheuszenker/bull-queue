const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_TYPE,
  define: {
    freezeTableName: true,
    paranoid: true,
  },
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.first = require('../models/First')(sequelize, Sequelize);

module.exports = db;
