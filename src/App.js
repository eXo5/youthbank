import React, { Component } from 'react';
import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
import Navbar from './components/WelcomeView/Navbar'
import './index.css';
import logo from './logo.svg';
import PgFooter from './components/WelcomeView/PgFooter'


class App extends Component {
  render() {
    return (
    <div> 
	   <Row>
	    	<header>
	    		<Navbar />
			</header>

				{/* SLIDESHOW FRONT PAGE */}
		
			      <Row>
			    		<Col s={12} className="grid6 carouselOpts">
			    		<Carousel options={{ fullWidth: true }}>
							<div className='panelOne'>
								<h2>First Panel</h2>
								<p className='white-text'>This is your first panel</p>
							</div>
							<div className='panelTwo'>
								<h2>Second Panel</h2>
								<p className='white-text'>This is your second panel</p>
							</div>
							<div className='panelThree'>
								<h2>Third Panel</h2>
								<p className='white-text'>This is your third panel</p>
							</div>
							<div className='panelFour'>
								<h2>Fourth Panel</h2>
								<p className='white-text'>This is your fourth panel</p>
							</div>
						</Carousel>
			    		</Col>
		    		</Row>

		</Row>
	</div>

    );
  }
}

export default App;
