const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.route('/signup').post(userController.createAcount);

router.route('/login').post(userController.loginUser);

router.route('/:id/history').get(userController.getAllTranf);

module.exports = router;
