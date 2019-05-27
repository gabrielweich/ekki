const express = require('express');

const router = express.Router();
const userController = require('./controllers/userController');
const accountController = require('./controllers/accountController');
const contactController = require('./controllers/contactController');

const requireLogin = require('./middlewares/requireLogin');


router.post('/user', userController.post);
router.post('/user/login', userController.login);

router.get('/account', requireLogin, accountController.get)

router.post('/contact', requireLogin, contactController.post);
router.get('/contact', requireLogin, contactController.getAll);

module.exports = router;
