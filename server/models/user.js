const table = "user";

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      const db = require("../utils/db.connection");
      db.query(`select * from ${table}`, (err, result, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      db.end();
    });
  },
};
