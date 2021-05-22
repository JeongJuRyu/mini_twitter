const dotenv = require("dotenv"); // 비밀키를 dotenv로 관리

dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "mini-twitter",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "mini-twitter",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "mini-twitter",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
