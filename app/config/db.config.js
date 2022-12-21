require('dotenv').config({ path: 'config/.env' })
module.exports = {
  HOST: "172.26.1.167",
  PORT: "3306",
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
