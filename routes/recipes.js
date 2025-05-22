var express = require("express");
const { db } = require("../db/sequelize");
var router = express.Router();
const login = require("../middlewares/login");

//*Obtener todas las recetas
router.get("/getall", login, async function (req, res, next) {
  try {
    const recipes = await db.Recipe.findAll();
    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Error al obtener las recetas:", error);
    res.status(500).json({ error: "Error al obtener las recetas" });
  }
});

//* Crear una receta
router.post("/create", login, async function (req, res, next) {
  try {
    const { name, description, ingredients, preparation, email } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const recipe = await db.Recipe.create({
      nombre: name,
      descripcion: description,
      ingredientes: ingredients,
      preparacion: preparation,
      userId: user.id,
    });
    if (!recipe) {
      return res.status(400).json({ error: "Error al crear la receta" });
    }else {
      return res.status(201).json({ recipe });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al crear la receta" });
  }
});

module.exports = router;
