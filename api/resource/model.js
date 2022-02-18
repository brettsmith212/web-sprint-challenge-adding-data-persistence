// build your `Resource` model here

const db = require("../../data/dbConfig");

async function getResources() {
  return await db("resources").select("*");
}

async function getResourceById(resource_id) {
  return await db("resources").where({ resource_id }).select("*");
}

async function addResource(resource) {
  const newResourceId = await db("resources").insert(resource);
  const newResource = await getResourceById(newResourceId);
  return newResource;
}

module.exports = {
  getResources,
  addResource,
};
