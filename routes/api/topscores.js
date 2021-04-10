const router = require('express').Router();
const topScoresController = require('../../controller/topscores');

// Matches with "/api/scores/:topic"
router.route('/:topic').get(topScoresController.findScoresByTopic);

module.exports = router;
