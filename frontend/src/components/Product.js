import React from 'react';
import { Card } from 'react-bootstrap';

//you can access products by passing in props too
//const Product = (props) => {
//$props.product._id
//props.product.imgage

//product is destructure and used as is below
const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/products/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</a>
			<Card.Body>
				<a href={`/products/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</a>

				<Card.Text as='div'>
					<div className='my-3'>
						{product.rating} from {product.numReviews} reviews
					</div>
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>

	)
}

export default Product
