var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send(`Welcome to the home page.`));

module.exports = router;