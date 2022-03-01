import React, { useState, useContext } from "react";
import { axiosInstance } from "../js/network/index";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import img from "../images/wory.jpg"
import "../style/login.css"


const SignIn = () => {
  const history = useHistory();
  const [trainerDetail, setTrainerDetail] = useState({});

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [state, setState] = useState({});

  const [userForm, setUserForm] = useState(initialFormData);

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value.trim(),
    });
  };


  const handleError=()=>{
    NotificationManager.error(
      "Email or Password Is Invalid"
    );
  }
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
      .then((data) => data.data)

      .then((token) => {
        console.log(token);
        localStorage.setItem("token", `${token["key"]}`);
        localStorage.setItem("is_staff", token["user"]["is_staff"]);
        localStorage.setItem("id", token["user"]["id"]);
        localStorage.setItem("email", token["user"]["email"]);
        localStorage.setItem("username", token["user"]["username"]);
        console.log("token ", `Token ${token["key"]}`);
        console.log("is_staff ", token["user"]["is_staff"]);

        return token;
      })
      .then((token) => {
        if (token["user"]["is_staff"]) {
          axiosInstance
            .get(`http://127.0.0.1:8000/users/trainerDetail/`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token["key"]}`,
              },
            })
            .then((data) => data.data.trainer[0])
            .then((res) => {
              console.log(res);
              setTrainerDetail(() => res.fields);
              localStorage.setItem("age", res.fields.age);
              localStorage.setItem("image", res.fields.image);
              localStorage.setItem("phone", res.fields.phoneNumber);
              localStorage.setItem("address", res.fields.address);
              console.log("my details ", trainerDetail);
            })
            .then(history.push("/"));
        } else {
          axiosInstance
            .get(`http://127.0.0.1:8000/users/traineeDetail/`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token["key"]}`,
              },
            })
            .then((data) => data.data.trainee[0])
            .then((res) => {
              console.log(res);
              localStorage.setItem("age", res.fields.age);
              localStorage.setItem("currentWeight", res.fields.currentWeight);
              localStorage.setItem("height", res.fields.height);
              localStorage.setItem("trainerID", res.fields.trainerID);
              localStorage.setItem("workoutPlan", res.fields.workoutPlan);
              localStorage.setItem("yogaPlan", res.fields.yogaPlan);
            })
            .then(history.push("/"));
        }
      })

      .catch((err) => {
        console.log("login error");
        handleError();
        // history.push("/signup")
      });
  };

    return (
        <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2 ">
              <img src={img} alt="Image" className="img-fluid"/>
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8 ">
                  <div className="mb-4">
                  <h2>Sign In to <strong>H<span className="hige">i</span>G<span className="hige">E</span></strong></h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="pt-5 ">
                  <div className="form-group first my-6">
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="Please Enter your email"
                      name="email"
                      value={userForm.email}
                      onChange={(e) => handleChange(e)}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />    
                  </div>
                  <div className="form-group last mb-6">
                    <label for="password">Password</label>
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
                  {/*                   
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                      <input type="checkbox" checked="checked"/>
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
                  </div> */}
    
                  <input type="submit" value="Log In" className="btn text-white btn-block login"/>
    
                  {/* <span className="d-block text-left my-4 text-muted"> or sign in with</span>
                  
                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="icon-facebook mr-3"></span> 
                    </a>
                    <a href="#" className="twitter">
                      <span className="icon-twitter mr-3"></span> 
                    </a>
                    <a href="#" className="google">
                      <span className="icon-google mr-3"></span> 
                    </a>
                  </div> */}
                </form>
                </div>
              </div>

            </div>
            
              <NotificationContainer />
          </div>
        </div>
      </div>
    );
}

export default SignIn;
