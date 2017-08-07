import React from 'react'; 
import {Footer} from 'react-materialize';
import '../../index.css';

class PgFooter extends React.Component {
	render() {
		return(
<Footer className="page-footer"
	links={
		<ul>
			<li><a className="black-text text-lighten-3 footerText" href="https://github.com/eXo5/youthbank" target="_blank">Developer Repo</a></li>
			<li><a className="black-text text-lighten-3 footerText" href="https://www.indeed.com" target="_blank">Careers</a></li>
			<li><a className="black-text text-lighten-3 footerText" href="#" target="_blank">Site Map</a></li>
		</ul>
	}
>
		<h5 className="orange-text footerLogo">Young Money</h5>
		<p className="black-text text-lighten-4">&copy; Young Money Records 2017</p>
</Footer>
		)
	}
}

export default PgFooter;