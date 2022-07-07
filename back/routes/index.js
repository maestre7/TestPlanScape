const router = require("express").Router();

router.post("/login", require("../controllers/login"));
router.post("/register", require("../controllers/register"));

module.exports = router;