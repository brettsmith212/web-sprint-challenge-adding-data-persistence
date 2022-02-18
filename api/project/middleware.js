const validateProject = async (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(404).json({ message: "project_name is required" });
    return;
  }

  next();
};

module.exports = {
  validateProject,
};
