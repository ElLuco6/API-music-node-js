const express = require('express'),
      router = express.Router(),
      cache = require('apicache').middleware,
      musicController = require('../controller/music');

router.get('/ytb/:artiste', cache('1 minutes'), musicController.getDiscographie);
router.get('/top20', cache('1 minutes'), musicController.top20);

module.exports = router;