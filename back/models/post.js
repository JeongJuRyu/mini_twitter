module.exports = (sequelize, DataTypes) => {
  // 자동으로 복수가 되서 mySQL에는 users 테이블로 생성됨
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      //이모티콘까지 쓰려면 mb4
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    //post에 좋아요를 누른 사람들. as로 위의 관계와 구분한다.
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
  };
  return Post;
};
