const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

router.post("/", function (req, res, next) {
  passport.authenticate(
    "local",
    {
      session: false,
    },
    (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : "ログインに失敗しました。",
          user: user,
        });
      }

      req.login(
        user,
        {
          session: false,
        },
        (err) => {
          if (err) {
            res.send("err");
          }

          const info = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };

          const token = jwt.sign(info, "aot-management" /*{expiresIn: '5s'}*/);

          console.log("ユーザーログイン：" + user.email);
          return res.json({
            message: info.message,
            user: info,
            token,
          });
        }
      );
    }
  )(req, res);
});

module.exports = router;
