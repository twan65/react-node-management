const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// auth情報取得
// var configAuth = require('../config/auth');

// const User = require("../models/user-admin");

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT

      //   User.findOneEmail(email)
      //     .then((user) => {
      //       if (!user) {
      //         return cb(null, false, {
      //           message: "メールアドレスまたはパスワードを確認してください。",
      //         });
      //       }

      //       bcrypt.compare(password, user.password, (err, result) => {
      //         if (err) {
      //           return cb(null, false, { message: err });
      //         }

      //         if (!result) {
      //           return cb(null, false, {
      //             message: "メールアドレスまたはパスワードを確認してください。",
      //           });
      //         }

      //         return cb(null, user, {
      //           message: "ログインに成功しました。",
      //         });
      //       });
      //     })
      //     .catch((err) => cb(err));

      return cb(
        null,
        {
          id: 1,
          email: "twan@text.co.jp",
          name: "TWAN",
          role: "USER",
        },
        { message: "ログインに成功しました。" }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "aot-management",
    },
    function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      //console.log(jwtPayload);
      //   return User.findOneEmail(jwtPayload.email)
      //     .then((user) => {
      //       return cb(null, user);
      //     })
      //     .catch((err) => {
      //       return cb(err);
      //     });
      return cb(null, {
        id: 1,
        email: "twan@text.co.jp",
        name: "TWAN",
        role: "USER",
      });
    }
  )
);
