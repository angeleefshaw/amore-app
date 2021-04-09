module.exports = function(sequelize, DataTypes) {
	var Scores = sequelize.define('Scores', {
		id: {
            autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
        },
        user_id: {
			type: DataTypes.INTEGER
		},
        quiz: {
			type: DataTypes.STRING,
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false
		}

	});

    Scores.associate = models => {
        Scores.hasMany(models.User)
    }
	

    
	
	return Scores;
};
