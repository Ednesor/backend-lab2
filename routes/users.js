var express = require("express");
const login = require("../middlewares/login");
const checkExistUser = require("../functions/checkExistUser");
const { db } = require("../db/sequelize");
var router = express.Router();
const checkInputCreateUser = require("../functions/checkInputCreateUser");

/* GET users listing. */
//* GET: datos del usuario desde la base de datos
router.get("/", login, async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: { email, password },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener el usuario" });
  }
});

//* POST: crear un nuevo usuario en la base de datos
router.post("/", async function (req, res, next) {
  try {
    const { name, email, age, password } = req.body;

    if (!checkInputCreateUser(name, email, age, password)) {
      return res.status(400).json({ error: "Datos incorrectos" });
    }

    const existeUser = await checkExistUser(email);
    if (existeUser) {
      return res.status(400).json({ error: "El usuario ya existe" });
    } else {
      const user = await db.User.create({
        nombre: name,
        email,
        edad: age,
        password,
      });
      return res.status(201).json({ user });
    }
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

module.exports = router;
