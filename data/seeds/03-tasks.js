exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "Task #1 Description",
      task_notes: "task notes go here",
      project_id: 1,
    },
  ]);
};
