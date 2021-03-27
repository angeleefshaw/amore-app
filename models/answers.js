module.exports = function(sequelize, DataTypes) {
    var Answers = sequelize.define('Answers', {
        answer_id: DataTypes.INTEGER,
        answer: DataTypes.STRING,
        correct: DataTypes.BOOLEAN,
        question_id: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        tableName: 'answers'
    });

    Answers.associate = models => {
        console.log(models)
        Answers.belongsTo(models.Questions, {
            foreignKey : {
                allowNull: false
            }
        });
    }

    return Answers
};