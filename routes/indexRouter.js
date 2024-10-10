const router = require("express").Router();
const messageController = require('../controllers/messageController');

router.get("/", messageController.getMessages);
router.get('/message/:id', messageController.getMessageById)

module.exports = router;
