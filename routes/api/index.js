const router = require('express').Router();
const questionRoutes = require('./questions');
const passportRoutes = require('./passport');
const scoresRoutes = require('./scores');

// quizzes routes
router.use('/quiz', questionRoutes);

// Top scores route
router.use('/scores', scoresRoutes);

// passport routes
router.use('/', passportRoutes);

module.exports = router;
