const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signup_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Page',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-signup-form'
        }
    });
}

exports.login_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login Page',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-login-form'
        }
    });
}

exports.logout_get = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

exports.signup_post = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userInstance = new User(null, first_name, last_name, email, hash);
    
    userInstance.save().then(() => {
        res.redirect('/');
    });
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    const userInstance = new User(null, null, null, email, password);

    const userData = await userInstance.getUserByEmail();

    const isValid = bcrypt.compareSync(password, userData.password);

    if (!!isValid) {
        req.session.is_logged_in = true;
        req.session.first_name = userData.first_name;
        req.session.last_name = userData.last_name;
        req.session.user_id = userData.user_id;
        res.redirect('/');

    } else {

        res.sendStatus(401);
    }
}
