import React from 'react'; 
import {Footer} from 'react-materialize';
import '../../index.css'

class PgFooter extends React.Component {
	render() {
		return(
<Footer className="page-footer"
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="https://github.com/eXo5/youthbank" target="_blank">Developer Repo</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="orange-text">Young Money</h5>
		<p className="grey-text text-lighten-4">&copy; Young Money Records 2017</p>
</Footer>
		)
	}
}

export default PgFooter;