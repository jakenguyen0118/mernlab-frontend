import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' sticky='top'>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/players'>Players</Nav.Link>
					<Nav.Link href='/team'>Teams</Nav.Link>
				</Nav>
			</Navbar>
		</>
	)
}

export default NavBar