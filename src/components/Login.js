import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

export default function SignIn() {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [userForm, setUserForm] = useState(initialFormData);

  const [token, setToken] = useState();

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleClickShowPassword = () => {
    setUserForm({ ...userForm, showPassword: !userForm.showPassword });
  };

  // const handleClickShowconPassword = () => {
  //   setUserForm({ ...userForm, showconPassword: !userForm.showconPassword });
  // };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setUserForm({ ...userForm, [prop]: event.target.value });
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  const getTraineeFavPlans = () => {
    setToken(localStorage.getItem("token"));
    axios
      .get("http://localhost:8000/yogafavplan/", {
        headers: headers,
      })
      .then((res) => {
        console.log(typeof res.data.result === "string");
        if (typeof res.data.result === "string") {
          localStorage.setItem("yogafavplanid", "No Available Yoga Plans");
        } else {
          localStorage.setItem(
            "yogafavplanid",
            JSON.parse(res.data.result)[0].pk
          );
        }
      });

    axios
      .get("http://localhost:8000/workoutfavplan/", {
        headers: headers,
      })

      .then((res) => {
        console.log(typeof res.data.result === "string");
        if (typeof res.data.result === "string") {
          localStorage.setItem(
            "workoutfavplanid",
            "No Available Workout Plans"
          );
        } else {
          localStorage.setItem(
            "workoutfavplanid",
            JSON.parse(res.data.result)[0].pk
          );
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/users/login/`, {
        email: userForm.email,
        password: userForm.password,
      })
      .then((res) => res.data)

      .then((token) => {
        localStorage.setItem("token", `${token["key"]}`);
        localStorage.setItem("is_staff", token["user"]["is_staff"]);
        localStorage.setItem("id", token["user"]["id"]);

        setToken(localStorage.getItem("token"));
      });
    getTraineeFavPlans();
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
          <button type="submit" className="btn">
            {localStorage.getItem("token") ? (
              <Link>Register</Link>
            ) : (
              <>
                <button type="submit" className="btn">
                  Register
                </button>
                <span>Please login first</span>
              </>
            )}
          </button>
        </div>
      </form>
    </Container>
  );
}
