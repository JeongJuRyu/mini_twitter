const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development"; // 개발 중이므로 development
const config = require("../config/config")[env];
const db = {};
//node와 mysql 연결
const sequelize = new Sequelize(
  config.database,
  config,
  username,
  config,
  password,
  config
);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
