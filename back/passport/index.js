const passport = require("passport");
const local = require("./local");
const { User } = require("../models");
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //서버에러, 성공
  });
  //로그인 한 뒤 부터는 이 부분이 라우터가 실행되기 전에 계속 실행 됨
  //그래서, user.js의 req.user에 이 정보가 들어가있다.
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      console.error(error);
    }
  });
  local();
};
