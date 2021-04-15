import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions.js'


const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword

	const dispatch = useDispatch();

	const productList = useSelector(state => state.productList);
	const { loading, error, products } = productList;

	//allow us to fetch products from react 
	useEffect(() => {
		dispatch(listProducts(keyword))
	}, [dispatch, keyword])


	return (
		<div>
			<Row>
				<Col>
					<h1>Latest Flowers</h1>
				</Col>
				<Col>
					<h5 className="text-success">SAVE 15% ON YOUR ORDER TODAY!</h5>
				</Col>
			</Row>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col
							key={product._id}
							sm={12}
							md={6}
							lg={4}
							xl={3}
						>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	)
}

export default HomeScreen
