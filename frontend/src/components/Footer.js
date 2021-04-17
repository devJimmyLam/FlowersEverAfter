import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className='text-center text-dark'>
					<Col>
						<p><b>DISCLAIMER:</b></p>
						<p>The information provided on FlowersEverAfter ("Site") is for general web portfolio (project) purposes only. </p>
						Do not use actual credit card to purchase fake listed products.
					</Col>
				</Row>
				<Row>
					<Col className='text-center py-3'>
						Copyright &copy; Jimmy Lam 2021
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer;