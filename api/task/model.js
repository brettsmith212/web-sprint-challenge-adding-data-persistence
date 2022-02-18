// build your `Task` model here
const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  return tasks.map((task) => {
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: Boolean(task.task_completed),
      project_name: task.project_name,
      project_description: task.project_description,
    };
  });
}

async function getTaskById(task_id) {
  return await db("tasks").where({ task_id }).select("*");
}

async function addTask(task) {
  const newTaskId = await db("tasks").insert(task);
  const [newTask] = await getTaskById(newTaskId);
  return {
    task_id: newTask.task_id,
    task_description: newTask.task_description,
    task_notes: newTask.task_notes,
    task_completed: Boolean(newTask.task_completed),
    project_id: newTask.project_id,
  };
}

module.exports = {
  addTask,
  getTasks,
};
