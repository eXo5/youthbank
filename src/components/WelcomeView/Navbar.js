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
						<Modal

							header='Sign In'
							trigger={
								<Button waves='light'>Sign In</Button>
							}>
							<Row>
								<Input id="email" onChange={this.handleChange} value={this.state.email}type="email" label="Email"  s={12} />
								<Input id="password" onChange={this.handleChange}  value={this.state.password} type="password" label="Password" s={12} />
								<Button type="submit" onClick={(event) => {this.props.handleSubmit(event, this.email, this.password)}}>Submit</Button>
							</Row>
						</Modal>
					</Navbar>
				</div>	

			</header>
			)
	}
}

export default ThisNavbar;