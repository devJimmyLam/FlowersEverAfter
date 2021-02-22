//rafce
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Containter, Container } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" varient='dark' expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand >FlowersEverAfter</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">

							<LinkContainer to='/cart'>
								<Nav.Link
									className='mr-2'>
									<i className='fas fa-shopping-cart px-2'></i>Cart
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user px-2'></i>Sign In
								</Nav.Link>
							</LinkContainer>
							
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
