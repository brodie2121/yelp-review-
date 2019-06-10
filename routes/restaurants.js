const express = require('express');
const router = express.Router(); 

const RestaurantsControllers = require('../controllers/restaurants');

router.get('/restaurants', RestaurantsControllers.restaurants_get);
router.get('/restaurant_id', RestaurantsControllers.restaurant_id_get);

  module.exports = router;

