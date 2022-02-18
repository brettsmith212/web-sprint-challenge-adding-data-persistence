const validateTask = async (req, res, next) => {
  const { task_description, project_id } = req.body;
  if (!task_description || !project_id) {
    res
      .status(404)
      .json({ message: "task_description and project_id is required" });
    return;
  }

  next();
};

module.exports = {
  validateTask,
};
