const router = require("express").Router();

router.get("/", (req, res) => res.render("newMessage", {}));

module.exports = router;
