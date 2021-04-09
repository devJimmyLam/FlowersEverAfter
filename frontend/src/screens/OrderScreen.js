import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ListGroupItem, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

const OrderScreen = ({ match }) => {
	const orderId = match.params.id

	const dispatch = useDispatch()

	const orderDetails = useSelector((state) => state.orderDetails)
	const { order, loading, error } = orderDetails

	if (!loading) {
		const addDecimals = (num) => {
			return (Math.round(num * 100) / 100).toFixed(2)
		}
		order.itemsPrice = addDecimals(
			order.orderItems.reduce((acc, item) => acc + item.price * item.price, 0)
		)
	}


	useEffect(() => {
		dispatch(getOrderDetails(orderId))
	}, [dispatch, orderId])

	return loading
		? <Loader />
		: error
			? <Message variant='danger'>{error}</Message> :
			<div>
				<span className='align-baseline h2'>Order</span>
				<span className='align-baseline h3 text-success ml-2'>{order._id}</span>
				<Row>
					<Col md={8}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Shipping</h2>
								<p>
									<strong>Name:</strong> {order.user.name}
								</p>
								<p>
									<strong>Email:</strong>
									<a
										href={`mailto:${order.user.email}`}
										className='ml-2'
									>
										{order.user.email}
									</a>
								</p>
								<p>
									<strong>Address:</strong>
									{order.shippingAddress.address},{' '}
									{order.shippingAddress.city},{' '}
									{order.shippingAddress.postalCode},{' '}
									{order.shippingAddress.country}
								</p>
								{order.isDelivered ? (
									<Message variant='success'>Delivered on {order.deliveredAt}</Message>
								) : (
									<Message variant='danger'>Not Delivered</Message>
								)}
							</ListGroup.Item>

							<ListGroup.Item>
								<h2>Payment Method</h2>
								<p>
									<strong>Method: </strong>
									{order.paymentMethod}
								</p>
								{order.isPaid ? (
									<Message variant='success'>Paid on {order.paidAt}</Message>
								) : (
									<Message variant='danger'>Not Paid</Message>
								)}
							</ListGroup.Item>

							<ListGroup.Item>
								<h2>
									Order Items
								({order.orderItems.reduce((acc, item) => acc + item.qty, 0)})
							</h2>

								{order.orderItems.length === 0 ? (
									<Message>Order is empty</Message>
								) : (
									<ListGroup variant='flush'>
										{order.orderItems.map((item, index) => (

											<ListGroup.Item key={index}>
												<Row>
													<Col md={3}>
														<Image
															src={item.image}
															alt={item.name}
															fluid
															rounded
														/>
													</Col>
													<Col>
														<Link to={`/product/${item.product}`}>
															{item.name}
														</Link>
													</Col>
													<Col md={4}>
														{item.qty} x ${item.price} = ${item.qty * item.price}
													</Col>
												</Row>
											</ListGroup.Item>

										))}
									</ListGroup>
								)
								}
							</ListGroup.Item>

						</ListGroup>
					</Col >
					<Col md={4}>
						<Card>
							<ListGroup.Item>
								<h2>Order Summary</h2>
								<small>*Free shipping for total items over $100</small>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>
										Items
									({order.orderItems.reduce((acc, item) => acc + item.qty, 0)})
								</Col>
									<Col>${order.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${order.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${order.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${order.totalPrice}</Col>
								</Row>
							</ListGroup.Item>

							{/**********************
							*{TODO} ADD PAYPAL BUTTON*
							*************************/}

						</Card>
					</Col>
				</Row >
			</div >
}

export default OrderScreen
