'use strict';

// const { in } = require("sequelize/types/lib/operators");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      question_id: {
          allowNull: false,
          type: DataTypes.INTEGER
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('answers');
  }
};