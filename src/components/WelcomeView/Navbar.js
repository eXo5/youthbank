import React from 'react';
import {Navbar, NavItem, Button} from 'react-materialize';
import '../../index.css'
// import SignIn from './components/SignIn';
import { Link } from 'react-router-dom';

class PgNavbar extends React.Component {

	render(){
		return(

		<header>
			<div className="navbar-fixed">
	    		<Navbar brand='Young Money' right className="NavbarCSS ">
	    	{/*we have to import react-router */}
						<NavItem href='get-started.html' className="navItems">Getting started</NavItem>
						<NavItem href='components.html' className="navItems">Components</NavItem>
							
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

							// <li className="navItems">
							// 	<Link to="/signin">Sign in</Link>
							// </li>
				// <Link to="/signin">
				// 				<Button waves='light'>Sign In</Button>
				// 			</Link>

export default PgNavbar;