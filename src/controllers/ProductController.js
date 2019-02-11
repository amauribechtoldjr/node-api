const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
	async index(req, res){
		const { page = 1 } = req.query;
		const products = await Product.paginate({}, { page: page, limit: 5 });

		return res.json(products);
	},
	async store(req, res){
		const product = await Product.create(req.body);

		return res.json(product);
	},
	async show(req, res){
		await Product.findById(req.params.id, function (err, product) {
			if (product) {
				return res.json(product);
			}

			return res.json(err);
		});
	},
	async update(req, res){
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(product);
	},
	async delete(req, res){
		await Product.findByIdAndRemove(req.params.id);

		res.send();
	}
};