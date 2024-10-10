const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows;
}

async function insertMessage(name, message, date) {
  await pool.query("INSERT INTO messages (name , message, date) VALUES ($1, $2, $3)", [name, message, date]);
}

module.exports = {
    getAllMessages,
    getMessageById,
    insertMessage,
};
