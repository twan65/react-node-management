const table = "user_skill";
const db = require("../utils/db.connection");

module.exports = {
  findAllByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT s.id, s.name, us.rating FROM ${table} us INNER JOIN skill s ON us.skill_id = s.id WHERE us.user_id = ?`,
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
