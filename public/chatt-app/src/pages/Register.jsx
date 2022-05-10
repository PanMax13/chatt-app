import React, { useState,  } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './register.css'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Register() {

	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	})
	

	const handleSubmit = (event) => {
		event.preventDefault();
		const {password, confirmPassword, username, email} = values;
		if (password !== confirmPassword) {
			toast('пароли не совпадают')
		}
	};

	const handleChange = (event) => {
		setValues({...values, [event.target.name]: event.target.value});
	};

	

	return (
		<>
			<FormContainer>
				<form onSubmit={(event) => handleSubmit(event)}>
					<div className="brand">
						<h1>Snappy</h1>
					</div>
					<input type="text" placeholder='Username' name="Username" onChange={(e) => handleChange(e)}/>
					<input type="text" placeholder='Email' name="Email" onChange={(e) => handleChange(e)}/>
					<input type="text" placeholder='Password' name="Passport" onChange={(e) => handleChange(e)}/>
					<input type="text" placeholder='password' name="Confirm Password" onChange={(e) => handleChange(e)}/>
					<button type="submit"> Create User </button>
					<span>Already have an account? <Link to="/login">Login</Link></span>
				</form>
			</FormContainer>
			<ToastContainer />
		</>
		
	)
}

const FormContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #123124;
	.brand  {
		width: 200px;
		text-align: center;
		margin: 10px auto;
	}
	form {
		width: 600px;
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		gap: 2rem;
		background-color: grey;
		border-radius: 20px;
		input { 
			color: #000000;
			font-size: 20px;
			margin: 10px;
			background-color: transporent;
			padding: 10px;
			border: 0.1rem solid #4e0eff;
			border-radius: 0.4rem;
			&:focus {
				border: 0.1rem solid #997af0;
			}
		}
		button {
			width: 300px;
			margin: 0 auto;
			padding: 10px;
			border-radius: 20px;
			border: none;
			background-color: white;
		}
	}
	span {
		color: white;
		text-transform: uppercase;
	}
`;

export default Register