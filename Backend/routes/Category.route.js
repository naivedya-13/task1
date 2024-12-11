const express = require('express');
const CategoryStore = require('../Controllers/CategoryStore');

const router = express.Router();

// Define Routes
router.post('/category', CategoryStore);

module.exports = router;
