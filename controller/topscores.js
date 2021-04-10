const db = require('../models');

// Defining methods
module.exports = {
	findScoresByTopic: function(req, res) {
		db.Scores
			.findAll({
				where: { topic_id: req.params.topic },
				order: [ [ 'score', 'DESC' ] ],
				limit: 5
			})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => {
				console.log(err);
				res.status(422).json(err);
			});
	}
};
