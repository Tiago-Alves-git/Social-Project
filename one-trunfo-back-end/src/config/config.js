const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "trunfodb",
  port: process.env.MYSQL_PORT || "3306",
  host: process.env.MYSQL_HOST || "localhost",
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};