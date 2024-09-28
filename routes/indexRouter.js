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
router.post('/new', (req, res) => console.log(req.body))

module.exports = router;
