const router = require("express").Router();
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
router.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
router.post('/new', (req, res) => {
  const newMessage = { text: req.body.message, user: req.body.user, added: new Date() };
  messages.push(newMessage)
  res.status(201).redirect('/');
});

module.exports = router;
