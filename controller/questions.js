
const db = require("../models");

// Defining methods for the questionsController
module.exports = {
  findByTopiId: function(req, res) {
    console.log(db);
    db.Questions
      .findAll(
        {
        where : {topic_id: req.params.id}, 
        include: [db.Answers],
        attributes: ["question"]
        }
        ) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
};

//Will need to loop through all questions, render one for each page?
