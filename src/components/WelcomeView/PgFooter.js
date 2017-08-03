import React from 'react'; 
import {Footer} from 'react-materialize';
import '../../index.css'

class PgFooter extends React.Component {
	render() {
		return(
<Footer copyrights="Copyright Young Money Records" className="page-footer"
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
	className='example'
>
		<h5 className="orange-text">Young Money</h5>
		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
		)
	}
}

export default PgFooter;