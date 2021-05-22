const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const app = express();
const db = require("./models"); // index 즉 db 갖고온다.
const passportConfig = require("./passport");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();
//cors 이슈 해결
app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

dotenv.config();
//front에서 넘긴 data를 req.body에 담기 위한 코드. 라우터들보다 항상 위에 있어야 함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session());
app.use(passport.initialize());
app.use(
  passport.session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET, // .env
  })
);

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/", (req, res) => {
  res.send("hello, api");
});

app.get("/posts", (req, res) => {
  //api는 보통 json으로 응답함, json 또는 send로 클라이언트에 전송
  res.json([
    {
      id: 1,
      content: "hello",
    },
    {
      id: 2,
      content: "hello",
    },
    {
      id: 3,
      content: "hello",
    },
  ]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버시작");
});
