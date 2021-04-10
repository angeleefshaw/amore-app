const db = require("../models");

// Defining methods for the scoresController
module.exports = {

  createScores: function(req, res) {
    db.Scores
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
