module.exports = function(capp) {
    const CurrentAssets = require('../controller/transactions.controller.js');
 
    // Create a new CurrentAsset
    capp.post('/api/currentAssets', CurrentAssets.create);
 
    // Retrieve all CurrentAsset
    capp.get('/api/currentAssets', CurrentAssets.findAll);
 
    // Retrieve a single CurrentAsset by Id
    capp.get('/api/currentAssets/:id', CurrentAssets.findById);
 
    // Update a CurrentAsset with Id
    capp.put('/api/currentAssets', CurrentAssets.update);
 
    // Delete a CurrentAsset with Id
    capp.delete('/api/currentAssets/:id', CurrentAssets.delete);
}
