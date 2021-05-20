module.exports = (sequelize, DataTypes) => {
  // 자동으로 복수가 되서 mySQL에는 users 테이블로 생성됨
  const User = sequelize.define(
    "User",
    {
      //id는 기본적으로 들어가므로 생략
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수요소
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수요소
      },
      password: {
        type: DataTypes.STRING(100), // 암호화를 하면 길이가 길어지므로 넉넉하게
        allowNull: false, // 필수요소
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post); // 작성자
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like" }); // 좋아요 관계
  };
  return User;
};
