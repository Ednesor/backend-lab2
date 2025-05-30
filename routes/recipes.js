var express = require("express");
const { db } = require("../db/sequelize");
var router = express.Router();
const login = require("../middlewares/login");
const inputPostRecipe = require("../middlewares/inputPostRecipe");

//*Obtener todas las recetas
router.get("/getall", async function (req, res, next) {
  try {
    const recipes = await db.Recipe.findAll();
    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Error al obtener las recetas:", error);
    res.status(500).json({ error: "Error al obtener las recetas" });
  }
});

//* Obtener una receta por ID
router.get("/getone/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await db.Recipe.findOne({
      where: { id },
    });
    if (!recipe) {
      return res.status(404).json({ error: "Receta no encontrada" });
    }
    res.status(200).json({ recipe });
  } catch (error) {
    console.error("Error al obtener la receta:", error);
    res.status(500).json({ error: "Error al obtener la receta" });
  }
});

//* Crear una receta
router.post("/create", login, inputPostRecipe, async function (req, res, next) {
  try {
    const { name, description, ingredients, preparation, email } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    console.log(name, description, ingredients, preparation, email);
    const recipe = await db.Recipe.create({
      titulo: name,
      descripcion: description,
      ingredientes: ingredients,
      preparacion: preparation,
      userId: user.id,
    });
    if (!recipe) {
      console.log("Error al crear la receta");
      return res.status(400).json({ error: "Error al crear la receta" });
    }else {
      return res.status(201).json({ recipe });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Error al crear la receta" });
  }
});


module.exports = router;
