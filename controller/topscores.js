const db = require('../models');

// Defining methods
module.exports = {
	findScoresByTopic: function(req, res) {
		console.log('find scores for js hit');
		db.Scores
			.findAll({
				where: { quiz: req.params.topic }
			})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => {
				console.log(err);
				res.status(422).json(err);
			});
	}
};
