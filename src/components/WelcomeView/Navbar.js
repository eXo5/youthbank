import React from 'react';
import {Navbar, Button} from 'react-materialize';
import '../../index.css'

import { Link } from 'react-router-dom';

class PgNavbar extends React.Component {

	render(){
		return(

		<header>
			<div className="navbar-fixed">
	    		<Navbar brand='Young Money' right className="NavbarCSS ">
	    	{/*we have to import react-router */}


						<li className="navItems">

							<Link to="/signin">
								<Button waves='light'>Sign In</Button>
							</Link>
							</li>

					</Navbar>

				</div>	

			</header>
			)
	}
}


export default PgNavbar;

