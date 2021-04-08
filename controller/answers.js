
const db = require("../models");

// Defining methods for the booksController
module.exports = {

 findAnswersByQuestion: function(req, res) {
     db.Answers
     .findAll()
     .then(dbModel => res.render(dbModel))
    .catch(err => res.status(422).json(err));

  }
};
