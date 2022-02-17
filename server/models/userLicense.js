const table = "user_license";
const db = require("../utils/db.connection");

module.exports = {
  findAllByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT l.id, l.name FROM ${table} ul INNER JOIN license l ON ul.license_id = l.id WHERE ul.user_id = ?`,
        [userId],
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
