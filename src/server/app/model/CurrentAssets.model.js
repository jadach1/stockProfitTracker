module.exports = (sequelize, Sequelize) => {
	const thiscanbeanything = sequelize.define('currentassets', {
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
          type: Sequelize.DATE
      }
    });
	
	return thiscanbeanything;
}