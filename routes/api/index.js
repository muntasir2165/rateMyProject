const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
