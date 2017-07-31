import React from 'react';
import {Navbar, NavItem, Button, Modal, Row, Input} from 'react-materialize';

class PgNavbar extends React.Component {
	render(){
		return(

		<header>
	    		<Navbar brand='Young Money' right>
	    	{/*we have to import react-router */}
						<NavItem href='get-started.html'>Getting started</NavItem>
						<NavItem href='components.html'>Components</NavItem>
						<Modal

							header='Sign In'
							trigger={
								<Button waves='light'>Sign In</Button>
							}>
							<Row>
								<Input s={6} label="First Name" />
								<Input s={6} label="Last Name" />
								<Input type="email" label="Email"s={12} />
								<Input type="password" label="password" s={12} />
							</Row>
						</Modal>
					</Navbar>

			</header>
			)
	}
}

export default PgNavbar;