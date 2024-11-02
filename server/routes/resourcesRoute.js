const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourcesController');

// Route to create a new resource
router.post('/', resourceController.createResource);

// Route to get all resources
router.get('/', resourceController.getAllResources);

// Route to get a single resource by ID
router.get('/:id', resourceController.getResourceById);

// Route to update a resource by ID
router.put('/:id', resourceController.updateResource);

// Route to delete a resource by ID
router.delete('/:id', resourceController.deleteResource);

module.exports = router;
