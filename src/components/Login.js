import React, { useState } from 'react';
import { axiosInstance } from '../js/network/index';
import { useHistory } from 'react-router-dom';


import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


export default function SignIn() {
	const history = useHistory();
	const[trainerDetail,setTrainerDetail]=useState({})
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});
	const [state, setState] = useState({})


	const [userForm, setUserForm] = useState(initialFormData);

	const [flag,setFlag] = useState(false);


	const handleChange = (e) => {
		setUserForm({
			...userForm,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleClickShowPassword = () => {
		setUserForm({ ...userForm, showPassword: !userForm.showPassword });
	};

	const handleClickShowconPassword = () => {
		setUserForm({ ...userForm, showconPassword: !userForm.showconPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (prop) => (event) => {
		setUserForm({ ...userForm, [prop]: event.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userForm);

		axiosInstance
			.post(`http://127.0.0.1:8000/users/login/`, {
				email: userForm.email,
				password: userForm.password,
			})
			.then(data => data.data)

			.then((token) => {
				console.log(token)
				localStorage.setItem('token',`${token['key']}`)
				localStorage.setItem('is_staff',token['user']['is_staff'])
				localStorage.setItem('id',token['user']['id'])
				localStorage.setItem('email',token['user']['email'])
				localStorage.setItem('username',token['user']['username'])
				console.log("token ",`Token ${token['key']}`)
				console.log( "is_staff ",token['user']['is_staff'])
				return token
				//['token']:token['key'],'id':token['user']['id'
				
					
					
					// axiosInstance.get('http://127.0.0.1:10000/workoutfavplan/', {
					// 	// headers: headers
				// 	//   })
				// 	axiosInstance.put('http://127.0.0.1:8000/addWorkoutPlan/',{'id':8} ,{
						
				// 	  })

				//   .then((res) => {
                //      console.log("mystate is ",state)
				// 	// console.log(res.data)
				// 	// console.log(res.data.fields)

				//   })
                //       .catch(err=>{
				// 		console.log("login error")  
				// 		// history.push("/signup")
				// 	})


				// }
				// else {
				// 	history.push("/clothing")
				// }
			}).then( (token)=>{   
			if (token['user']['is_staff']){
				axiosInstance
				.get(`http://127.0.0.1:8000/users/trainerDetail/`, {
					headers: {
						'Content-Type': 'application/json',
						'Authorization':`Token ${token['key']}`
					}
				
				  
				})
				.then((data)=>(data.data.trainer)[0])
				.then((res)=>{
					console.log(res)
					setTrainerDetail(()=>res.fields)
								
					localStorage.setItem('age',res.fields.age)
					 localStorage.setItem('phone',res.fields.phoneNumber)
					localStorage.setItem('address',res.fields.address)
					console.log("my details ",trainerDetail)
				})
			  }
			  else {
				  //trainee data
			  }
			})
			   .then(history.push("/me"))
			.catch(err=>{
				console.log("login error")  
				// history.push("/signup")
			})
		
		
	};

	
			
	
		};



	return (
		<Container component="main" maxWidth="xs">
			<form style={{ minWidth: "450px", maxWidth: "500px" }} onSubmit={(e) => handleSubmit(e)}>
				<div className="mb-3">
					<h2 className="h2 mb-5">Register Now!</h2>
					<label htmlFor="exampleInputName" className="form-label h3">
						Name
					</label>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label h3">
							Email Address
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Please Enter your email"
							name="email"
							value={userForm.email}
							onChange={(e) => handleChange(e)}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword" className="form-label h3">
							Password
						</label>
						<Input
							type={userForm.showPassword ? "text" : "password"}
							onChange={handlePasswordChange("password")}
							value={userForm.password}
							name="password"
							className="form-control"
							placeholder="password"
							onChange={(e) => handleChange(e)}
							id="exampleInputPassword"
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}

									>
										{userForm.showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
						/>

					</div>
					<button type="submit" className="btn" >
						Register
					</button>
				</div>
			</form>
		</Container>
	);
}