import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

//you can access products by passing in props too
//const Product = (props) => {
//$props.product._id
//props.product.imgage

//product is destructure and used as is below
const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			{/** 
			 * 
			we want to use a link tag because this is a SPA app  
			 */}
			<Link to={`/products/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/products/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>

	)
}

export default Product
