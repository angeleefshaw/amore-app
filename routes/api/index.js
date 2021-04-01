const router = require("express").Router();
const questionRoutes = require("./questions");

// quizzes routes
router.use("/question", questionRoutes);

module.exports = router;
