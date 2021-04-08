const router = require('express').Router();
const questionRoutes = require('./questions');
const passportRoutes = require('./passport');

// quizzes routes
router.use('/quiz', questionRoutes);

// passport routes
router.use('/', passportRoutes);

module.exports = router;
