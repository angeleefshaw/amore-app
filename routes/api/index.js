const router = require("express").Router();
const questionRoutes = require("./questions");

// quizzes routes
router.use("/quiz", questionRoutes);

module.exports = router;
