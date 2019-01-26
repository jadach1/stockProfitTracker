module.exports = (sequelize, Sequelize) => {
	const thiscanbeanything = sequelize.define('asset', {
	  symbol: {
				type: Sequelize.STRING(6),
				unique: true,
				primaryKey: true
	  },
	  shares: { // total shares bought 
				type: Sequelize.INTEGER,
				defaultValue: 0,
				validate: {
					min: 0,
					isInt: true
				}
		},
		avgprice: { // originalMoney / shares
				type: Sequelize.DECIMAL(12,2),
				defaultValue: 0,
				validate:{
					isDecimal: true,
					min: 0
				}
	},
	  originalMoney : { // total in - total out
			type: Sequelize.DECIMAL(12,2),
			defaultValue: 0,
			validate: {
				isDecimal: true,
				min: 0
			}
	},
		totalMoneyIn : { // total amount of money invested into this asset
			type: Sequelize.DECIMAL(12,2),
			defaultValue: 0,
			validate: {
				isDecimal: true,
			}
	},
		totalMoneyOut : { // total amount of money pulled out of this investment
			type: Sequelize.DECIMAL(12,2),
			defaultValue: 0,
			validate: {
				isDecimal: true,
			}
	},
		price : { // Derived from API call
			type: Sequelize.DECIMAL(12,2),
			defaultValue: 0,
			validate: {
				isDecimal: true,
			}
	},
		currentTotal : { // price * shares
			type: Sequelize.DECIMAL(12,2),
			defaultValue: 0,
			validate: {
				isDecimal: true,
			}
	}
	
    });
	
	return thiscanbeanything;
}