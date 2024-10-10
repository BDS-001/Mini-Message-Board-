const { Pool } = require("pg");
require('dotenv').config()

const username = process.env.DATABASE_USERNAME
const pass = process.env.DATABASE_PASS
const databasePort = process.env.DATABASE_PORT || 5432
const dbName = 'mini_message_board'

module.exports = new Pool({
  connectionString: `postgresql://${username}:${pass}@localhost:${databasePort}/${dbName}`
});
