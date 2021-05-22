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
    //내가 좋아요를 누른 게시글들
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" }); // 좋아요 관계
    //새로운 중간 테이블을 생성할 때, 양 쪽 모두 UserId를 가지므로 foreignKey로 userId 부분을 바꿔서 구분 해 준다.
    //through는 table의 이름을 바꿔주는 것
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollwerId",
    });
  };
  return User;
};
