const table = "user_role";
const db = require("../utils/db.connection");

module.exports = {
  findOneByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${table} WHERE user_id = ${userId}`,
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};
