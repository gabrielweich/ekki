const express = require('express');

const router = express.Router();
const userController = require('./controllers/userController');
const accountController = require('./controllers/accountController');

router.post('/user', userController.post);
router.post('/user/login', userController.login);

router.get('/account', accountController.get)

module.exports = router;
