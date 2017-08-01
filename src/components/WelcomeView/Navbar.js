import React from 'react';
import {Navbar, NavItem, Button, Modal, Row, Input} from 'react-materialize';

class ThisNavbar extends React.Component {
	constructor(){
		super()
		this.state = {
			email: "",
			password: ""
		}

    this.handleChange = (event) => {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    }
		
	}
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
								<Input id="email" onChange={this.handleChange} value={this.state.email}type="email" label="Email"  s={12} />
								<Input id="password" onChange={this.handleChange}  value={this.state.password} type="password" label="Password" s={12} />
								<Button type="submit" onClick={(event) => {this.props.handleSubmit(event, this.email, this.password)}}>Submit</Button>
							</Row>
						</Modal>
					</Navbar>

			</header>
			)
	}
}

export default ThisNavbar;