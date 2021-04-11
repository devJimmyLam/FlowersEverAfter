//rafce
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Containter, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		console.log('user is logout');
		dispatch(logout());
	}

	return (
		<header>
			<Navbar bg="dark" varient='dark' expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand className=' text-light'>FlowersEverAfter</Navbar.Brand>
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
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id='username'
								>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>

									<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user px-2'></i>Sign In
							</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id="adminmenue">

									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>

								</NavDropdown>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar >
		</header >
	)
}

export default Header
