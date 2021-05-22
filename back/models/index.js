const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development"; // 개발 중이므로 development
const config = require("../config/config")[env];
const db = {};
//node와 mysql 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//설정한 db 모델들을 불러와서 sequelize에 등록한다.

db.Comment = require("./comment")(sequelize, Sequelize);
db.Image = require("./Image")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

//associalte 실행을 통해 작성한 관계들 대로 연결을 한다.
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
