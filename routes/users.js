const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users');

router.get('/signup', UsersControllers.signup_get);
router.get('/login', UsersControllers.login_get);
router.get('/logout', UsersControllers.logout_get);
router.post('/signup', UsersControllers.signup_post); 
router.post('/login', UsersControllers.login_post); 

module.exports = router;