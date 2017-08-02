import React, {Component} from 'react';
import { Row, Col, Button, Form, Input, Icon, Modal, Header } from 'react-materialize'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class NewParent extends Component {
	constructor(){
		super()

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			redirectTo: null
		}

		this.handleChange = (event) => {
			this.setState({
				[event.target.id]: event.target.value
			})
		}

			this.handleSubmit = (event) => {
				event.preventDefault()
				axios
				.post("/auth/newparent", {
					parentFirstName: this.state.firstName,
					parentLastName: this.state.lastName,
					email: this.state.email,
					password: this.state.password,
				})
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log("new parent")
					this.setState({redirectTo:"/splash-p"})
					}else{
						console.log("duplicate")
					}
				})
			}
}

		
//but b/c arrow func, no need for .bind(this)
		

		
		render() {
			if (this.state.redirectTo) {
					return <Redirect to={{pathname:this.state.redirectTo}} />
			} else {
					return(

					<div className="container">

						<Form>						
							<Input label="First Name" value={this.state.firstName} onChange={this.handleChange} />
							<Input label="First Name" value={this.state.lastName} onChange={this.handleChange} />
							<Input label="First Name" value={this.state.email} onChange={this.handleChange} />
							<Input label="First Name" value={this.state.password} onChange={this.handleChange} />
							<Input label="First Name" value={this.state.confirmPassword} onChange={this.handleChange} />
							<Button type="submit" waves="light" className="mainBtn">Submit</Button>
						</Form>	
							
					</div>



				)		
			}
		
		}
}



export default NewParent;
