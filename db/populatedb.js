const pool = require('./pool'); // Adjust the path as needed
const AppError = require('../utils/customErrors');

const createTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
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
   AND    table_name   = 'messages'
);
`;

async function setupDatabase() {
  console.log("Setting up database...");
  
  try {
    const res = await pool.query(checkTableSQL);
    const tableExists = res.rows[0].exists;
    
    if (!tableExists) {
      console.log("Table 'messages' does not exist. Creating...");
      await pool.query(createTableSQL);
      console.log("Table 'messages' created successfully.");
    } else {
      console.log("Table 'messages' already exists. Skipping creation.");
    }
  } catch (err) {
    throw new AppError('Database setup failed', 500, err);
  }
}

module.exports = { setupDatabase };