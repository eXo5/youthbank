import React, { Component } from 'react';
import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
import Navbar from './components/WelcomeView/Navbar'
import Home from './components/WelcomeView/SignUp';
import './index.css';
import logo from './logo.svg';
import PgFooter from './components/WelcomeView/PgFooter';
import Why from './components/WelcomeView/WhyWeMadeIt';
import Features1 from './components/WelcomeView/Features1';


class App extends Component {
  render() {
    return (
    <div> 
	    	<header>
	    		<Navbar />
			</header>
			  <Home />
			 <Why />
			  <Features1 />
			<PgFooter />

	</div>

    );
  }
}

export default App;