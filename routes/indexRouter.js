const router = require("express").Router();
const { getAllMessages, getMessageById } = require('../utils/messageStore');

router.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: getAllMessages() }));
router.get('/message/:id', (req, res) => res.render("messageDetails", { title: "Message Details", message: getMessageById(req.params.id) }))

module.exports = router;
