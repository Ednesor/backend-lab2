const { db } = require("../db/sequelize");
require('dotenv').config();

async function login(req, res, next) {
  const {email, password} = req.body;
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No autorizado' });
  if (token !== process.env.AUTORIZATION) return res.status(401).json({ error: 'No autorizado' });
  if (!email || !password) return res.status(401).json({ error: 'No autorizado' });

  const user = await db.User.findOne({ where: { email, password } });
  if(!user) return res.status(401).json({ error: 'Error de autenticación' });

  next();
}

module.exports = login;