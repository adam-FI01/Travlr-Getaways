const express = require('express'); // Express app
const router = express.Router();    // Router Logic


const tripsController = require('../controllers/trips');


router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip)
    .put(tripsController.tripsUpdateTrip);


router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;