require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  dialect: 'mysql',
  database: 'blogs_api',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};