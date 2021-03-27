module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define('Questions', {
        question_id: DataTypes.INTEGER,
        question: DataTypes.STRING,
        topic_id: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        tableName: 'questions'
    });

    Questions.associate = models => {
        Questions.hasMany(models.Answers)
        Questions.belongsTo(models.Quizzes, {
            foreignKey : {
                allowNull: false
            }
        });
    }

    return Questions
};