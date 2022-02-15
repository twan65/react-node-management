const host = process.env.DB_HOST || "localhost";
const username = process.env.DB_USERNAME || "root";
const password = process.env.DB_PASSWORD || "password";
const database = process.env.DB_NAME || "managementdb";

module.exports = {
  host: host,
  username: username,
  password: password,
  database: database,
};
