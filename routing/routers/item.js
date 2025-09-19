const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.get("Got a get request ");
  // res.sendFile('./dummy.html',{root:__dirname});
});
//Post
router.post("/items", (req, res) => {
  //   res.send('Got a Post');
  res.json({ x: 1, y: 2, z: 3, a: 5 });
});
//Put
router.put("/item/:id", (req, res) => {
  res.send("Got a put Request");
});
//Delete
router.delete("/item/:id", (req, res) => {
  res.send("Got delete request ");
});

module.exports = router;
