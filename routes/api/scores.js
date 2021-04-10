const router = require("express").Router();
const scoresController = require("../../controller/scores");


router.route("/")
  .post(scoresController.createScores);

module.exports = router;



