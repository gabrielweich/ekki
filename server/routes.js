const express = require('express');

const router = express.Router();
const userController = require('./controllers/userController')

router.post('/user', userController.post);
router.post('/user/login', userController.login);

module.exports = router;
