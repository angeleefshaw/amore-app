
module.exports = function(sequelize, DataTypes) {
	var Scores = sequelize.define('Scores', {
		id: {
            autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
        },
        username: {
			type: DataTypes.STRING
		},
        topic_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
  });

    Scores.associate = models => {
        Scores.belongsTo(models.User, {foreignKey: 'username', targetKey: 'username'}),
        Scores.belongsTo(models.Quizzes,  {foreignKey: 'topic_id'})
    }
	
  return Scores;
};
