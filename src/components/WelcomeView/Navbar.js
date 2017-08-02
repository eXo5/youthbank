import React from 'react';
import {Navbar, NavItem, Button, Modal, Row, Input} from 'react-materialize';
import '../../index.css'
class PgNavbar extends React.Component {

	render(){
		return(

		<header>
			<div className="navbar-fixed">
	    		<Navbar brand='Young Money' right className="NavbarCSS ">
	    	{/*we have to import react-router */}
						<NavItem href='get-started.html' className="navItems">Getting started</NavItem>
						<NavItem href='components.html' className="navItems">Components</NavItem>
								<Button type="submit" onClick={(event) => {this.props.handleSubmit(event, this.email, this.password)}}>Submit</Button>
				</Navbar>
				</div>	

			</header>
			)
	}
}

export default Navbar;