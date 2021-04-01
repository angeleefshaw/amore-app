const router = require("express").Router();
const questionsController = require("../../controller/questions");
const answersController = require("../../controller/answers");


// Matches with "/api/question/:id"
router.route("/:id")
  .get(questionsController.findByTopiId)
  .get(answersController.findAnswersByQuestion)
  

module.exports = router;
