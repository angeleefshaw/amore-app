'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzes', [{
      topic_id: 1,
      topic_name: 'javascript'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
