const express = require('express');
const router = express.Router();
const patientControllers = require('../controller/patient_controllers');
const reportControllers = require('../controller/report_controllers');
const jwt = require('../config/middleware');
const passport = require('passport');

router.post('/register',jwt.verifyToken,patientControllers.register);
router.post('/:id/create_report',jwt.verifyToken,reportControllers.create_report);
router.get('/:id/all_reports',reportControllers.all_reports);

module.exports = router;