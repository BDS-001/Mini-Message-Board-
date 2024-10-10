const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getAllMessages()
    res.render('index', {title: 'mini message board', messages: messages})
}

async function getMessageById(req, res) {
    const id = req.params.id
    const message = await db.getMessageById(id);
    res.render('messageDetails', {title: 'mini message board', message: message[0]})
}

async function createMessageGet(req, res) {
    res.render('newMessage', {})
}

async function createMessagePost(req, res) {
  const { name, message } = req.body;
  await db.insertMessage(name, message, new Date());
  res.redirect("/");
}

module.exports = {
    getMessages,
    createMessageGet,
    createMessagePost,
    getMessageById
};
