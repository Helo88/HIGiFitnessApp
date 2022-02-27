import React, { useState, useEffect, useContext } from "react";
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

export default function SignIn(props) {
  const history = useHistory();
  const [trainerDetail, setTrainerDetail] = useState({});

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [state, setState] = useState({});

  const [userForm, setUserForm] = useState(initialFormData);
  const handleLogin = () => {
    setChangeLogin(true);
  };
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
    <Container component="main" maxWidth="xs">
      <form
        style={{ minWidth: "450px", maxWidth: "500px" }}
        onSubmit={(e) => handleSubmit(e)}
      >
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
          <button type="submit" className="btn" onClick={() => handleLogin()}>
            Register
          </button>
          <NotificationContainer />

        </div>
      </form>
    </Container>
  );
}
