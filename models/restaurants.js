const db = require('./conn');

class Restaurants {
    constructor(id, score, content, restaurant_id, user_id) {
        this.id = id;
        this.score = score;
        this.content = content;
        this.restaurantId = restaurant_id;
        this.userId = user_id;
    }
    static async getAll() {
        try {
            let response = await db.any(`select * from restaurants`);
            return response;
        } catch(err) {
            return err.message
        }
    }
    static async getIdBy(restaurant_id) {
        try {
            const response = await db.one(`select * from restaurants where id = ${restaurant_id}`);
            return response;
        } catch(err) {
            return err.message
        }
    }
    
    static async getReviewsById(restaurant_id) {
        try {
            const response = await db.any(`select * from reviews where restaurant_id = ${restaurant_id}`);
            return response;
        } catch(err) {
            return err.message;
        }
    }
}


module.exports = Restaurants;