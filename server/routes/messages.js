const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
const verifyToken = require('../middleware/verifyToken') 

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
