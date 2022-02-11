const host = process.env.DB_HOST || 5000;
const username = process.env.DB_USERNAME || 5000;
const password = process.env.DB_PASSWORD || 5000;
const database = process.env.DB_NAME || 5000;

module.exports = {
    host: host,
    username: username,
    password: password,
    database: database,
}