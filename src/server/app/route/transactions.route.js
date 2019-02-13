module.exports = function(capp) {
    const Transaction = require('../controller/transactions.controller.js');
 
    // Create a new CurrentAsset
    capp.post('/api/Transaction', Transaction.create);
 
    // Retrieve all CurrentAsset
    capp.get('/api/Transaction', Transaction.findDistinct);

    // Retrieve all Transactions based on symbol of Asset
    capp.get('/api/allAssetTransactions/:symbol', Transaction.findAllTransactionsByAsset);

    // Retrieve all Transactions based on symbol of Asset
     capp.get('/api/allAssetTypeTransactions/:transaction/:symbol', Transaction.findAllTransactionsByAssetAndType);

    // Update a CurrentAsset with Id
    capp.put('/api/Transaction', Transaction.update);
 
    // Delete a CurrentAsset with Id
    capp.delete('/api/Transaction/:id', Transaction.delete);

    // Retrieve all Transactions
    capp.get('/api/allTransactions', Transaction.findAll);

}
