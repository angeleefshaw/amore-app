const router = require('express').Router();
const questionRoutes = require('./questions');
const passportRoutes = require('./passport');
const topScoresRoutes = require('./topscores');

// quizzes routes
router.use('/quiz', questionRoutes);

// Top scores route
router.use('/scores', topScoresRoutes);

// passport routes
router.use('/', passportRoutes);

module.exports = router;
