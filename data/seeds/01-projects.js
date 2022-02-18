exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_name: "Project #1",
      project_description: "Project description goes here",
    },
  ]);
};
