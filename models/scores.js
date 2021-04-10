module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    // needs to be string
    username: {
      type: DataTypes.STRING,
    },
    // need to be topic_id (and quizzes models needs to be associotd)
    // quiz: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Scores.associate = (models) => {
    Scores.belongsTo(models.User);
  };

  Scores.associate = (models) => {
    // Scores.belongsTo(models.Quizzes, {
    //   foreignKey: {
    //     topic_id: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    // });
  };

  return Scores;
};
