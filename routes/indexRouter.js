const router = require("express").Router();
const { getAllMessages } = require('../utils/messageStore');

router.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: getAllMessages() }));

module.exports = router;
