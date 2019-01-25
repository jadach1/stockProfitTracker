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
				type: Sequelize.FLOAT(12,2),
				defaultValue: 0,
				validate:{
					isFloat: true,
					min: 0
				}
	},
	  originalMoney : { // total in - total out
			type: Sequelize.FLOAT(12,2),
			defaultValue: 0,
			validate: {
				isFloat: true,
				min: 0
			}
	},
		totalMoneyIn : { // total amount of money invested into this asset
			type: Sequelize.FLOAT(12,2),
			defaultValue: 0,
			validate: {
				isFloat: true,
			}
	},
		totalMoneyOut : { // total amount of money pulled out of this investment
			type: Sequelize.FLOAT(12,2),
			defaultValue: 0,
			validate: {
				isFloat: true,
			}
	},
		price : { // Derived from API call
			type: Sequelize.FLOAT(12,2),
			defaultValue: 0,
			validate: {
				isFloat: true,
			}
	},
		currentTotal : { // price * shares
			type: Sequelize.FLOAT(12,2),
			defaultValue: 0,
			validate: {
				isFloat: true,
			}
	}
	
    });
	
	return thiscanbeanything;
}