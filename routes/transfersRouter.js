const express = require('express');
const tranfController = require('../controllers/tranf.controller');
const router = express.Router();

router.route('/').post(tranfController.transferencia);




module.exports = router;
