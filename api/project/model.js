// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects").select("*");
  return projects.map((project) => {
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: Boolean(project.project_completed),
    };
  });
}

async function getProjectsById(project_id) {
  return await db("projects").where({ project_id }).select("*");
}

async function addProject(project) {
  const newProjectId = await db("projects").insert(project);
  const [newProject] = await getProjectsById(newProjectId);
  return {
    project_id: newProject.project_id,
    project_name: newProject.project_name,
    project_description: newProject.project_description,
    project_completed: Boolean(newProject.project_completed),
  };
}

module.exports = {
  getProjects,
  addProject,
};
