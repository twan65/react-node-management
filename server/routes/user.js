const express = require("express");
var bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user");
const UserRole = require("../models/userRole");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => {
    // TODO: usersからpassowrdを除いて送ること
    res.status(200).send(users);
  });
});

router.get("/:id", (req, res, next) => {
  console.log(`ユーザー取得ID：${req.params.id}`);
  const user = User.findOneById(req.params.id);
  // TODO: password項目を削除
  // TODO: スキル、資格取得して一緒に送ること
  res.status(200).send(user);
});

// ユーザー登録
router.post("/", (req, res, next) => {
  let entity = req.body;
  const loginUser = req.user;
  User.findOneByEmail().then((user) => {
    if (user) {
      return res.status(400).json({
        err: "既に登録されているユーザーです。",
      });
    }
  });

  // 仮パスワード生成
  const crypto = require("crypto");
  const N = 16;
  const randomStr = crypto.randomBytes(N).toString("base64").substring(0, N);

  bcrypt.hash(randomStr, 5, (err, passHash) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    entity["password"] = passHash;

    User.save(entity, loginUser.email)
      .then((result) => {
        console.log(result);
        console.log("ユーザーを正常に登録しました。ID：" + result.id);

        // TODO: ユーザー登録、Role登録
        // await UserRole.findOneByUserId(result.id).then((roleResult) => {
        //   console.log("Role登録。Role ID：" + roleResult.role_id);
        //   const info = {
        //     id: result.id,
        //     email: result.email,
        //     name: result.name,
        //     role: roleResult.role_id,
        //   };
        // }).catch((err) => {
        //   return res.json({
        //     error: err,
        //   });
        // });

        // TODO: 仮パスワードを送信（Slack?メールアドレス？）
        console.log("仮パスワード：" + randomStr);
        return res.status(200).json({
          message: "ユーザーを正常に登録しました。",
          user: info,
        });
      })
      .catch((err) => {
        return res.json({
          error: err,
        });
      });
  });
});

module.exports = router;
