const Restaurants = require('../models/restaurants');

exports.restaurants_get = async (req, res) => {
    const restaurantData = await RestaurantModel.getAll();

    res.render('template', { 
        locals: {
        title: 'Restaurant Page',
        is_logged_in: req.session.is_logged_in,
        restaurantData: restaurantData,
        first_name: req.session.first_name,
        user_id: req.session.user_id
    },
    partials: {
        partial: 'partial-restaurant'
    }
    });
}

exports.restaurant_id_get = async (req, res) => {
    console.log(req.params);
    const restaurantId = req.params.restaurant_id;
    const restaurantData = await RestaurantModel.getIdBy(restaurantId);
    const reviewData = await RestaurantModel.getReviewsById(restaurantId);

    res.render('template', {
        locals: {
        title: restaurantData.name,
        restaurantData: restaurantData,
        reviewData : reviewData,
        is_logged_in: req.session.is_logged_in,
        first_name: req.session.first_name,
        user_id: req.session.user_id
    },
    partials : {
        partial: 'partial-single-restaurant'
    }
    });
}