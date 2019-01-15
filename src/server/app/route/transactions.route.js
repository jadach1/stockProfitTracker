module.exports = function(capp) {
    const CurrentAssets = require('../controller/transactions.controller.js');
 
    // Create a new CurrentAsset
    capp.post('/api/currentAssets', CurrentAssets.create);
 
    // Retrieve all CurrentAsset
    capp.get('/api/currentAssets', CurrentAssets.findDistinct);

    // Update a CurrentAsset with Id
    capp.put('/api/currentAssets', CurrentAssets.update);
 
    // Delete a CurrentAsset with Id
    capp.delete('/api/currentAssets/:id', CurrentAssets.delete);

    // Retrieve all Transactions
    capp.get('/api/allTransactions', CurrentAssets.findAll);
}
