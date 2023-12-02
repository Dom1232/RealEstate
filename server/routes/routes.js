const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Define routes for different actions
router.post('/hire', controller.hireEmployee);
router.get('/employees', controller.getEmployees);
router.put('/update/:id', controller.updateEmployee);
router.delete('/delete/:id', controller.deleteEmployee);

router.get('/branch/:branchno', controller.getBranchAddress);
router.get('/branch', controller.getBranches);
router.get('/branchAll', controller.getAllBranches);
router.put('/updateBranch/:branchno', controller.updateBranch);
router.post('/location', controller.createBranch);

router.get('/clients', controller.getClients);
router.put('/updateClient/:clientNo', controller.updateClient);

module.exports = router;