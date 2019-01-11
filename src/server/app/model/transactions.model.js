module.exports = (sequelize, Sequelize) => {
	const thiscanbeanything = sequelize.define('transactions', {
	  symbol: {
		    type: Sequelize.STRING
	  },
	  shares: {
		    type: Sequelize.INTEGER
	  },
	  price: {
		  type: Sequelize.FLOAT
      },
      buydate: {
          type: Sequelize.DATEONLY
      },
      transaction: {
          type: Sequelize.BOOLEAN
      }
    });
	
	return thiscanbeanything;
}