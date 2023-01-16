const express = require('express');
var router = express.Router();

const routeUser = require('./users');
router.use("/users", routeUser);

module.exports = router;