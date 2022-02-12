const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 5000;

// const passport = require("passport");

const user = require("./routes/user");

require("./middleware/passport");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/users", user);

app.listen(port, () => console.log(`Listening on port ${port}`));
