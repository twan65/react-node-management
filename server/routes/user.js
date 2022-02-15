const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");
// const users = [
//   {
//     id: 1,
//     email: "twan65@test.co.jp",
//     image: "https://placeimg.com/64/64/any",
//     name: "Antaewoong1",
//     birthday: "19900605",
//     address1: "東京都",
//     address2: "荒川区",
//     address3: "荒川３−７２−２K2K ２０２",
//     gender: "男性",
//     position: "エンジニア",
//     skills: [
//       { name: "java", rating: 3 },
//       { name: "node.js", rating: 5 },
//       { name: "React", rating: 2 },
//     ],
//     licenses: [],
//     role: "ADMIN",
//   },
//   {
//     id: 2,
//     email: "twan65@test.co.jp",
//     image: "https://placeimg.com/64/64/any",
//     name: "Antaewoong1",
//     birthday: "19900605",
//     address1: "東京都",
//     address2: "荒川区",
//     address3: "荒川３−７２−２K2K ２０２",
//     gender: "男性",
//     position: "エンジニア",
//     skills: [
//       { name: "C", rating: 5 },
//       { name: "node.js", rating: 1 },
//       { name: "Spring", rating: 2 },
//     ],
//     licenses: [],
//     role: "USER",
//   },
//   {
//     id: 3,
//     email: "twan65@test.co.jp",
//     image: "https://placeimg.com/64/64/any",
//     name: "Antaewoong1",
//     birthday: "19900605",
//     address1: "東京都",
//     address2: "荒川区",
//     address3: "荒川３−７２−２K2K ２０２",
//     gender: "男性",
//     position: "エンジニア",
//     skills: [
//       { name: "java", rating: 3 },
//       { name: "node.js", rating: 5 },
//       { name: "React", rating: 2 },
//     ],
//     licenses: [],
//     role: "USER",
//   },
// ];

router.get("/", (req, res, next) => {
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
});

// router.get("/:id", (req, res, next) => {
//   res.status(200).send(users.find((e) => e.id == req.params.id));
// });

router.post("/", (req, res, next) => {
  let entity = req.body;
  const userIndexList = users.map((e) => e.id);
  const maxIndex = Math.max(...userIndexList);
  const user = {
    id: maxIndex + 1,
    ...entity,
    skills: [],
    licenses: [],
    image: "https://placeimg.com/64/64/any",
  };
  users.push(user);

  res.status(200).send(user);
});

router.post("/login", function (req, res, next) {
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
