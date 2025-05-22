module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }

  return Recipe;
};
