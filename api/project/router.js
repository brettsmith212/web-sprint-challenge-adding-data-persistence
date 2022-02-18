// build your `/api/projects` router here
const express = require("express");
const { getProjects, addProject } = require("./model");
const { validateProject } = require("./middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({ message: "error getting projects" });
  }
});

router.post("/", validateProject, async (req, res) => {
  try {
    const newProject = await addProject(req.body);
    res.status(201).json(newProject);
  } catch (e) {
    res.status(500).json({ message: "error adding project" });
  }
});

module.exports = router;
