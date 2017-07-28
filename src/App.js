import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col, Form, Button, Slider, Slide, Modal, Footer, Input} from 'react-materialize';
import './index.css';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
   <Row>
    	<header>
    		<Navbar brand='KidsBank' right>
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

	      <main>
		      <Row>
		    		<Col s={12} className="grid6">
		    			<Slider className="titleWelcome">
							<Slide
								src="http://lorempixel.com/580/250/nature/1"
								title="Welcome to Kids Bank">
								Caption
								<Modal
									header='Sign Up'
									trigger={
										<Button waves='light' className="signUpModal">Sign Up</Button>
									}>
									<Row>
											<Input s={6} label="First Name" />
											<Input s={6} label="Last Name" />
											<Input type="email" label="Email"s={12} />
											<Input type="password" label="password" s={12} />
											<Row>
												<Input s={12} type='select' label="Materialize Select" defaultValue='2'>
													<option value='1'>Parent</option>
													<option value='2'>Kid</option>
												</Input>
											</Row>
									</Row>
								</Modal>
							</Slide>
							<Slide
								src="http://lorempixel.com/580/250/nature/2"
								title="Slide Image 1"
								placement="left"
								className="slideComp">
								Component #1. 
							</Slide>
							<Slide
								src="http://lorempixel.com/580/250/nature/3"
								title="Slide Image 2"
								placement="right"
								className="slideComp">
								Component #2.
							</Slide>
						</Slider>
		    		</Col>
	    		</Row>
    		</main>


	    	<Footer copyrights="&copy 2015 Copyright Text"
				moreLinks={
					<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
				}
				links={
					<ul>
						<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
					</ul>
				}
				className='example page-footer'>
					<h5 className="white-text"> Kids Bank</h5>
					<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
			</Footer>;
	</Row>
    );
  }
}

export default App;
