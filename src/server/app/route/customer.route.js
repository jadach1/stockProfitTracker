module.exports = function(capp) {
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    capp.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    capp.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    capp.get('/api/customers/:id', customers.findById);
 
    // Update a Customer with Id
    capp.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    capp.delete('/api/customers/:id', customers.delete);
}
