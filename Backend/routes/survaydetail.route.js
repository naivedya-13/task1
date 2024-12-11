const express = require('express');
const SurveyDetails = require('../Controllers/SurvayDetails');

const router = express.Router();

// Define Routes
router.post('/survayDetails', SurveyDetails);

module.exports = router;
