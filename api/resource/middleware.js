const validateResource = async (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name) {
    res.status(404).json({ message: "resource_name is required" });
    return;
  }

  next();
};

module.exports = {
  validateResource,
};
