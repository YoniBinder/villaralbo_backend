var express = require('express');
var router = express.Router();

var GetNextMatch = require('../controllers/MatchesController')
/* GET next match listing. */
router.get('/',  GetNextMatch.getNextMatch);

module.exports = router;
