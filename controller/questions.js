
const db = require("../models/questions");

// Defining methods for the questionsController
module.exports = {
  findById: function(req, res) {
    db.Questions
      .findById(req.params.id)
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
