module.exports = function(capp) {
    const CurrentAssets = require('../controller/asset.controller.js');
 
    // Create a new CurrentAsset
    capp.post('/api/currentassets', CurrentAssets.create);

    // Find a single asset
     capp.get('/api/currentassets/:symbol', CurrentAssets.findAsset);

     // Find a single asset
     capp.get('/api/currentassets/checkIfExist/:symbol', CurrentAssets.check);

    // Update a CurrentAsset with Id
    capp.put('/api/currentassets', CurrentAssets.update);
 
    // Delete a CurrentAsset with Symbol
    capp.delete('/api/currentassets/:symbol', CurrentAssets.delete);

    // Retrieve all Transactions
    capp.get('/api/currentassets', CurrentAssets.findAll);

    /*********************** ARCHVIED ASSETS  ***************************/
    capp.post('/api/transferAsset', CurrentAssets.createArchviedAsset);
}
