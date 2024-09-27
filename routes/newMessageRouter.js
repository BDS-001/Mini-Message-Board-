const router = require("express").Router();

router.get("/", (req, res) => res.send("New Message Form"));

module.exports = router;
