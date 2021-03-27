module.exports = function(sequelize, DataTypes) {
    var Quizzes = sequelize.define('Quizzes', {
        topic_id: DataTypes.INTEGER,
        topic_name: DataTypes.STRING,
        
    }, {
        freezeTableName: true,
        tableName: 'quizzes'
    });

    Quizzes.associate = models => {
        Quizzes.hasMany(models.Questions)
    }

    return Quizzes
};