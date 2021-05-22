const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            //서버에러, 성공, 클라이언트에러(사용자 측에서의 에러)
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            //이 부분 실행 후, user.js의 authenticate의 두 번째 인자(콜백)가 실행된다.
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (error) {
          //서버에러 처리
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
