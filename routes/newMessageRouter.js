const router = require("express").Router();
const messageController = require('../controllers/messageController');

router.get("/", messageController.createMessageGet);
router.post('/', messageController.createMessagePost);

module.exports = router;
