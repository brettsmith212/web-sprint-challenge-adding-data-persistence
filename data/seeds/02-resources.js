exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "Resource Name",
      resource_description: "Resource description goes here",
    },
  ]);
};
