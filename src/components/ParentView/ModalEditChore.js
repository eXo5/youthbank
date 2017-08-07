import React from 'react';
import '../../index.css';
import {SideNav, SideNavItem, Button, Col, Footer, Form, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';

class ModalEditChore extends React.Component {
	constructor(props) {
	super(props)
		this.state = {
			choreName: ""
		}

	}

render() {
	return(
<Modal header="Edit Task"
				fixedFooter
				trigger={this.props.button}>

				<Row>
					<form>
						<Input type="text" id={this.props.choreName} />
					</form>
				</Row>		
				</Modal>

		)
	}//end render()

}

export default ModalEditChore;

//<ModalEditChore editChore={this.props.editChore} button={<Button id={i} onClick={this.editChore}className="mainBtn" key={i}>Edit Chore</Button>}/>