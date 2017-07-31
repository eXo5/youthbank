import React, {Component} from 'react';
import { Row, Col, Button, Form, Input, Icon, Modal, Header } from 'react-materialize'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class NewParent extends React.Component {
	constructor(){
		super()

		this.state = {
			parentFirstName: "",
			parentLastName: "",
			parentEmail: "",
			password: "",
			confirmPassword: "",
			redirectTo: null
		}
		//if you had to .bind(this) you would do it here, before the end of the constructor.
}

		
//but b/c arrow func, no need for .bind(this)
		handleChange = (event) => {
			this.setState({
				[event.target.id]: event.target.value
			})
		}

			handleSubmit = (event) => {
				event.preventDefault()
				axios
				.post("/auth/newparent", {
					parentFirstName: this.state.parentFirstName,
					parentLastName: this.state.parentLastName,
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

		
		render() {
			return(

				<div className="whatthefuck">

					<p>LOOK</p>

				</div>



				)
		}
}



export default NewParent;
