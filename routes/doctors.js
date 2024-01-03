const express = require('express');
const router = express.Router();
const doctorControllers = require('../controller/doctors_controllers');


router.post('/register',doctorControllers.register);
router.get('/login',doctorControllers.login);

module.exports = router;