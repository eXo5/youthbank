import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col, Form, Button} from 'react-materialize';
import './index.css';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
   <Row>
    	<header>
    		<Navbar brand='logo' right>
    	{/*we have to import react-router */}
					<NavItem href='get-started.html'>Getting started</NavItem>
					<NavItem href='components.html'>Components</NavItem>
				</Navbar>
			</header>

	      <main>
		      <Row>
		    		<Col s={6} className="grid6">
		    			<h1>kidBank</h1>
		    		</Col>
	    		</Row>
    		</main>
	
	    	<footer className="page-footer">
	    		<h3>footer will go here</h3>
	    	</footer>
	    	
</Row>
    );
  }
}

export default App;
