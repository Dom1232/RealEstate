const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Define routes for different actions
router.post('/hire', controller.hireEmployee);
router.get('/employees', controller.getEmployees);
router.put('/update/:id', controller.updateEmployee);
router.delete('/delete/:id', controller.deleteEmployee);

module.exports = router;