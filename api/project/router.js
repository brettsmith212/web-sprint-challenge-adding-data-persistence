// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "connected" });
});

router.post("/", (req, res) => {
  res.json({ message: "connected" });
});

module.exports = router;
