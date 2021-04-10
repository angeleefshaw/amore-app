const router = require("express").Router();
const scoresController = require("../../controller/scores");
const topScoresController = require("../../controller/topscores");

// Matches with "/api/scores"
router.route("/")
  .post(scoresController.saveScores);

// Matches with "/api/scores/:topic"
router.route('/:topic').get(topScoresController.findScoresByTopic);

module.exports = router;



