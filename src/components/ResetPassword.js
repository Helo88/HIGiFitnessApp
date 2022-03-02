import React, { useState, useContext } from "react";
import { axiosInstance } from "../js/network/index";
import { useHistory,useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Swal from "sweetalert2/dist/sweetalert2.js";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
// import img from "../images/wory.jpg"
import "../style/login.css";

const ResetPassword = () => {
  const history=useHistory()
  const passwordRegex=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  let { uid, token } = useParams();
  console.log(uid, token);
  const [userFormErrors, setUserFormErrors] = useState({
    passErr: null,
    confpasswordErr: null,
  });

  const [userForm, setUserForm] = useState({
    password: "",
    conpassword: "",
    showPassword: false,
    showconPassword: false,
  });

  const handleChange = (e) => {
    if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });

      setUserFormErrors({
        ...userFormErrors,
        passErr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 8
            ? "Length must not be less than 8"
            : passwordRegex.test(e.target.value) === false
            ? "Password must contain atleast one lowercase, one uppercase , at least one digit and special character"
            : null,
      });
    }
      else if (e.target.name === "conpassword") {
      setUserForm({
        ...userForm,
        conpassword: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        confpasswordErr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value != userForm.password
            ? "Password doesn't match"
            : null,
      });
    }
  };

  const handleError = (err) => {
    console.log(err);
    NotificationManager.error(err);
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

  const confirmResetPassword = () => {
    axiosInstance
      .post("/rest-auth/password/reset/confirm/", {
        uid: uid,
        token: token,
        new_password1: userForm.password,
        new_password2: userForm.conpassword,
      })

      .then(() =>
        NotificationManager.success("password is rested Successfully")
      )
      .then(()=>{history.push("/login")})

      .catch(() => NotificationManager.error("something went wrong"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
    
      if (userForm['password'].length == 0) {
        NotificationManager.error("Fill the Required Fields");
        return;
      }
      else if (userForm['conpassword'].length == 0) {
        NotificationManager.error("Fill the Required Fields");
        return;
      }
     for ( let x in userFormErrors){
          if (userFormErrors[x]!=null){
            console.log(userFormErrors[x])
            NotificationManager.error(userFormErrors[x]);
            return;
          }
     }

    console.log(userForm.password, userForm.conpassword);
     confirmResetPassword()
  };
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2 ">
            <img
              src={"/assets/images/reset.jpg"}
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8 ">
                <div className="mb-4">
                  <h2>
                    Reset Pass{" "}
                    <strong>
                      <span className="hige"> w </span>o
                      <span className="hige"> rd</span>
                    </strong>
                  </h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="pt-5 ">
                  <div className="mb-3">
               
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
                            {userForm.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <small className="text-danger">
                      {userFormErrors.passErr}
                    </small>{" "}
                    <br />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="mb-3">
                    <Input
                     type={userForm.showconPassword ? "text" : "password"}
                     onChange={handlePasswordChange("conpassword")}
                     value={userForm.conpassword}
                     name="conpassword"
                     className="form-control"
                     placeholder="Confirm password"
                     onChange={(e) => handleChange(e)}
                      id="exampleInputconPassword"
                      endAdornment={
                        <InputAdornment position="end">
                         
                          <IconButton
                            onClick={handleClickShowconPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {userForm.showconPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <small className="text-danger">
                      {userFormErrors.confpasswordErr}
                    </small>
                    <br />
                  </div>
                  <br></br>
                  <input
                    type="submit"
                    value="Reset Password"
                    className="btn text-white btn-block login"
                  />
                  {/* <div className="d-flex mb-5 align-items-center"> */}
                </form>
              </div>
            </div>
          </div>
          {/* <button onClick={resetPassword}>test</button> */}
          <NotificationContainer />
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ResetPassword;
=======
export default ResetPassword;
>>>>>>> f61a6b36489053d9015194f39003787f80e5360e
