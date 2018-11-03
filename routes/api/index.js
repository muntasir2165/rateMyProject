const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

// app routes
router.use("/project", projectRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);


module.exports = router;
