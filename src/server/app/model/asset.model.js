module.exports = (sequelize, Sequelize) => {
	const thiscanbeanything = sequelize.define('asset', {
	  symbol: {
				type: Sequelize.STRING(6),
				unique: true
	  },
	  shares: {
				type: Sequelize.INTEGER,
				defaultValue: 0
		},
		price: {
			type: Sequelize.FLOAT,
			defaultValue: 0
	},
	  total: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	}
    });
	
	return thiscanbeanything;
}