
const db = require("../models/answers");

// Defining methods for the booksController
module.exports = {

 findAnswersByQuestion: function(req, res) {
     db.Answers
     .findAll({where : {question_id: req.params.id}})
     .then(dbModel => res.render(dbModel))
    .catch(err => res.status(422).json(err));

  }
};
