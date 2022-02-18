// build your `/api/tasks` router here
const express = require("express");
const { getTasks, addTask } = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: "error getting tasks" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await addTask(req.body);
    res.status(201).json(newTask);
  } catch (e) {
    res.status(500).json({ message: "error adding task" });
  }
});

module.exports = router;
