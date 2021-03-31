const db = require("../models/quizzes");

// Defining methods for the booksController
module.exports = {
  
  findById: function(req, res) {
    db.Quizzes
      .findById(req.params.id)
      .then(dbModel => res.render(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
