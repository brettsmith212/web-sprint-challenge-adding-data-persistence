// build your `/api/resources` router here
const express = require("express");
const { getResources, addResource } = require("./model");
const { validateResource } = require("./middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await getResources();
    res.status(200).json(resources);
  } catch (e) {
    res.status(500).json({ message: "error getting resources" });
  }
});

router.post("/", validateResource, async (req, res) => {
  try {
    const newResource = await addResource(req.body);
    res.status(201).json(newResource);
  } catch (e) {
    res.status(500).json({ message: "error adding resource" });
  }
});

module.exports = router;
