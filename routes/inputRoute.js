const express = require("express");
const controllers = require("../controllers/checker");

const router = express.Router();


router.get("/", controllers.getInput);
router.post("/post-input", controllers.postInput);

module.exports = router;