const router = require("express").Router();
const { addMessage } = require('../utils/messageStore');

router.get("/", (req, res) => res.render("newMessage", {}));
router.post('/', (req, res) => {
    const { message, user } = req.body;
    addMessage(message, user);
    res.status(201).redirect('/');
  });

module.exports = router;
