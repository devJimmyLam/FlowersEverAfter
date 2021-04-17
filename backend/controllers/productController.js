import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//@desc		Fetch all products
//@route	GET /api/products
//@access	Public
const getProducts = asyncHandler(async (req, res) => {
	const pageSize = 4
	const page = Number(req.query.pageNumber) || 1

	const keyword = req.query.keyword ? {
		name: {
			$regex: req.query.keyword,
			$options: 'i'
		}
	} : {}

	const count = await Product.countDocuments({ ...keyword })
	const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1))

	res.json({ products, page, pages: Math.ceil(count / pageSize) })
})


//PUBLIC	access route to fetch single product
//GET 		/api/product/:id
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		res.json(product)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// PRIVATE/ADMIN	access route to delete a product
// DELETE 			/api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		await product.remove()
		res.json({ message: 'Product removed' })
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// PRIVATE/ADMIN 	access route to create a product
// POST 			/api/products
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample Name',
		price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		brand: 'Sample Brand',
		category: 'Sample category',
		countInStock: 0,
		rating: 0,
		numReviews: 0,
		description: 'Sample description',
	})
	const createdProduct = await product.save()
	res.status(201).json(createdProduct)
})

// PRIVATE/ADMIN 	access route to update a product
// PUT 				/api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, description, image, brand, category, countInStock } = req.body

	const product = await Product.findById(req.params.id)

	if (product) {
		product.name = name
		product.price = price
		product.description = description
		product.image = image
		product.brand = brand
		product.category = category
		product.countInStock = countInStock

		const updatedProduct = await product.save()
		res.json(updatedProduct)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// // PRIVATE 	access route to create new review
// // POST 			/api/products/:id/reviews
const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body

	const product = await Product.findById(req.params.id)

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		)

		if (alreadyReviewed) {
			res.status(400)
			throw new Error('Product already reviewed')
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		}

		product.reviews.push(review)

		product.numReviews = product.reviews.length

		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
			product.reviews.length

		await product.save()
		res.status(201).json({ message: 'Review added' })
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// PUBLIC 	access route to get top rated products
// GET 		/api/products/top
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(5)

	res.json(products)
})

export {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
}