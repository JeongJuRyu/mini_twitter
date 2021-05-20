const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  //POST /post
  res.json({ id: 1, content: "hi" }, { id: 2, content: "hizz" });
});
router.delete("/", (req, res) => {}); //DELETE /post

module.exports = router;
