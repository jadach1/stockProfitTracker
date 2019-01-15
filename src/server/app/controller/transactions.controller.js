const db = require('../config/db.config.js');
const CurrentAsset = db.assets;

// Post a CurrentAsset
exports.create = (req, res) => {	
	// Save to PostgreSQL database
	CurrentAsset.create({
				"symbol": req.body.symbol, 
				"shares": req.body.shares,
				"price": req.body.price,
                "buydate": req.body.buydate,
				"transaction": req.body.transaction,
				"total": req.body.total
			}).then(CurrentAsset => {		
			console.log("Creating Asset");	
			// Send created CurrentAsset to client
			res.json(CurrentAsset);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH All Transactions
exports.findAll = (req, res) => {
	CurrentAsset.findAll().then(CurrentAssets => {
			// Send All CurrentAssets to Client
			res.json(CurrentAssets.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH All CurrentAssets
exports.findDistinct = (req, res) => {
	CurrentAsset.findAll({
			attributes: { include: [[CurrentAsset.fn('DISTINCT', CurrentAsset.col('symbol')), 'symbols']] }
	  	}).then(CurrentAssets => {
			// Send All CurrentAssets to Client
			res.json(CurrentAssets);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a CurrentAsset by Id
exports.findById = (req, res) => {	
	CurrentAsset.findById(req.params.id).then(CurrentAsset => {
			res.json(CurrentAsset);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a CurrentAsset
exports.update = (req, res) => {
	const id = req.body.id;
	CurrentAsset.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> CurrentAsset Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a CurrentAsset by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	CurrentAsset.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> CurrentAsset Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};