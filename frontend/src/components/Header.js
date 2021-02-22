//rafce
import React from 'react';
import { Navbar, Nav, Containter, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" varient='dark' expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">FlowersEverAfter</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link 
							href="/cart"
							className='mr-2'>
								<i className='fas fa-shopping-cart px-2'></i>Cart
							</Nav.Link>
							<Nav.Link href="/login">
								<i className='fas fa-user px-2'></i>Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header