const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

//미들웨어 확장(req, res, next를 사용하기 위해)
//원래 passport.authenticate는 얘네를 쓸 수 없는데, 확장으로 사용함
router.post("/login", (req, res, next) => {
  //전략 실행
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      //express가 에러를 처리하도록 보낸다.
      next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginerr) => {
      //서버측 에러 처리
      if (loginErr) {
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        //password 제외한 모든 정보를 가져온다.
        attributes: {
          exclude: ["password"],
        },
        //관계 포함해줌
        include: [
          {
            model: db.Post,
          },
          {
            model: db.User,
            as: "Followings",
          },
          {
            model: db.User,
            as: "Followers",
          },
        ],
      });
      return res.json(user);
    });
  })(req, res, next);
});
router.post("/", async (req, res) => {
  try {
    // 이메일 중복 처리
    // 비동기 함수라 await 붙이기 가능.
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    //암호화 된 비밀번호 넣기
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    // POST /user
    //table에 데이터 넣는다.
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok"); //201은 생성 성공의 의미
  } catch (error) {
    console.error(error);
    next(error); // status 500, 서버측 오류
  }
});

router.post("/user/logout", (req, res, next) => {
  req.logout();
  req.session.destroy(); // 세션에 저장 된 쿠키와 id 없애고
  req.send("ok");
});
module.exports = router;
