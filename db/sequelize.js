const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRESQL, {
  dialect: 'postgres',
  logging: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// cargar modelos
db.User = require('./models/User')(sequelize, Sequelize.DataTypes);
db.Recipe = require('./models/Recipe')(sequelize, Sequelize.DataTypes);

// cargar tablas
db.sequelize.sync({ alter: true })
  .then(() => console.log("✅ Tablas sincronizadas"))
  .catch(err => console.error("❌ Error al sincronizar tablas:", err));

// establecer relaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sincronizar la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
};

module.exports = { db, connectDB };