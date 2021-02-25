import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'


const HomeScreen = () => {
	//allow us to pull products and update them
	const [products, setProducts] = useState([])

	//allow us to fetch products from react 
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('api/products')

			setProducts(data)
		}
		fetchProducts()
	}, [])


	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default HomeScreen
