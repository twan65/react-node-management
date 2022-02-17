const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 5000;

const passport = require("passport");

const user = require("./routes/user");
const sign = require("./routes/sign");

require("./middleware/passport");

// static
// app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/login", sign);
app.use(
  "/api/v1/users",
  passport.authenticate("jwt", { session: false }),
  user
);

// DB接続
// require("./utils/db.connection");

app.listen(port, () => console.log(`Listening on port ${port}`));
