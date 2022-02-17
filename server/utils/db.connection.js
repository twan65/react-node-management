const dbConfig = require("../config/dbConfig");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  enableKeepAlive: true,
});

// connection.connect((err) => {
//   if (err) {
//     console.log("error connecting: " + err.stack);
//     return;
//   }
//   console.log("success");
// });

module.exports = connection;
