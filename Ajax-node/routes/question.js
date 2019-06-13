var express = require('express');
var router = express.Router();
const QuesCont = require('../controllers/quesCont'); 


router.get('/question/:qno',QuesCont.getQuestion);
router.get('/count', QuesCont.getQuestionCount);

module.exports = router;
