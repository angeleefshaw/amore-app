const db = require("../models");

// Defining methods for the scoresController
module.exports = {

  saveScores: function(req, res) {
    console.log(req.body);
    db.Scores
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
