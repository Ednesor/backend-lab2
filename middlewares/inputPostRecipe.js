const { db } = require("../db/sequelize");
require("dotenv").config();

async function inputPostRecipe(req, res, next) {
  const { name, description, ingredients, preparation, email } = req.body;
  if (!name || !description || !ingredients || !preparation || !email) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  if (name.length < 3 || name.length > 50) {
    return res.status(400).json({ error: "El nombre debe tener entre 3 y 50 caracteres" });
  }
  if (description.length < 10 || description.length > 500) {
    return res.status(400).json({ error: "La descripción debe tener entre 10 y 500 caracteres" });
  }
  if (ingredients.length < 1 || ingredients.length > 50) {
    return res.status(400).json({ error: "Los ingredientes deben tener entre 1 y 50 elementos" });
  }

}
module.exports = inputPostRecipe;