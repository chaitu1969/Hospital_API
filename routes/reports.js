const express = require('express');
const router = express.Router();
const reportController = require('../controller/report_controllers');
const verifyToken = require('../config/middleware');
const passport = require('passport');

// router.post('/:id/create_report',reportController.create_report);
router.get('/:status',reportController.status);

module.exports = router;