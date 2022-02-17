const table = "user";
const db = require("../utils/db.connection");

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${table} WHERE enabled = 1`,
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
      // db.end();
    });
  },
  findOneById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${table} WHERE id = ? AND enabled = 1`,
        [id],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.length ? result[0] : null);
          }
        }
      );
    });
  },
  findOneByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${table} WHERE email = ? AND enabled = 1`,
        [email],
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
  findOneAndRoleByEmail: (email) => {
    // db.query(`SELECT * FROM topic`, function(error,topics){
    //     db.query(`SELECT * FROM author`, function(error2, authors){
    //     }
    // }
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT u.*, r.name as role FROM ${table} u INNER JOIN user_role ur ON u.id = ur.user_id INNER JOIN role r ON ur.role_id = r.id WHERE u.email = ? AND u.enabled = 1`,
        [email],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.length ? result[0] : null);
          }
        }
      );
    });
  },
  save: (entity, loginUserEmail) => {
    return new Promise((resolve, reject) => {
      const user = {
        email: entity.email,
        password: entity.password,
        name: entity.name,
        birthday: entity.birthday,
        gender: entity.gender,
        position: entity.position,
        image_path: null,
        address1: entity.address1,
        address2: entity.address2,
        address3: entity.address3,
        created_id: loginUserEmail,
        enabled: true,
      };

      db.query(
        `INSERT INTO user (email, password, image_path, name, birthday, address1, address2, address3, gender, position, enabled, created_id)
        VALUES ${user.email}, ${user.password}, ${user.image_path}, ${user.name}, ${user.birthday}, ${user.address1}, ${user.address2}, ${user.address3}, ${user.gender}, ${user.position}, ${user.enabled}, ${user.created_id})`,
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
