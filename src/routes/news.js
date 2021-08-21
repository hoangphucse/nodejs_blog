const express = require('express');
const router = express.Router();

const newConrtroller = require('../app/controllers/NewsController');


router.use('/:slug', newConrtroller.show)
router.use('/', newConrtroller.index);



module.exports = router;