var express = require('express');
var router = express.Router();
var travelController = require('../controllers/travelController');

router.get('/', travelController.index);
router.get('/about', travelController.about);
router.get('/travel', travelController.travel);
router.get('/rooms', travelController.rooms);
router.get('/meals', travelController.meals);
router.get('/news', travelController.news);
router.get('/contact', travelController.contact);

module.exports = router;
