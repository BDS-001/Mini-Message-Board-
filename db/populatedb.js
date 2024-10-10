#! /usr/bin/env node
require('dotenv').config()
const { Client } = require("pg");
const AppError = require('./utils/customErrors');

const username = process.env.DATABASE_USERNAME
const pass = process.env.DATABASE_PASS
const databasePort = process.env.DATABASE_PORT || 5432
const dbName = 'mini_message_board'

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  message TEXT,
  date TIMESTAMP WITH TIME ZONE
);
`;

const checkTableSQL = `
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE  table_schema = 'public'
   AND    table_name   = 'usernames'
);
`;

async function setupDatabase() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${username}:${pass}@localhost:${databasePort}/${dbName}`,
  });
  try {
    const res = await client.query(checkTableSQL);
    const tableExists = res.rows[0].exists;

    if (!tableExists) {
      console.log("Table 'usernames' does not exist. Creating...");
      await client.query(createTableSQL);
      console.log("Table 'usernames' created successfully.");
    } else {
      console.log("Table 'usernames' already exists. Skipping creation.");
    }
    } catch (err) {
        throw new AppError('Database setup failed', 500, err);
    } finally {
        await client.end();
    }
}

module.exports = {setupDatabase}
