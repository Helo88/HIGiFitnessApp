import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import "../style/Reg.css";

const UserForm = () => {
  const [userForm, setUserForm] = useState({
    namee: "",
    age: "",
    weight: "",
    height: "",
    email: "",
    password : "",
    conpassword : "",
    showPassword: false,
    showconPassword: false,
  });

  const [userFormErrors, setUserFormErrors] = useState({
    nameErr: null,
    ageErr: null,
    weightErr: null,
    heightErr:null,
    emailErr: null,
    passErr: null,
    confpasswordErr: null,
  });


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
  };

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const reg2 = /\s/g;

  const reg3 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });

      setUserFormErrors({
        ...userFormErrors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is required"
            : reg.test(e.target.value) === false
            ? "Email is Not Correct"
            : null,
      });
    } else if (e.target.name === "password") {
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
            : reg3.test(e.target.value) === false
            ? "Password must contain atleast one lowercase, one uppercase , at least one digit and special character"
            : null,
      });
    } else if (e.target.name === "namee") {
      setUserForm({
        ...userForm,
        namee: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        nameErr: e.target.value.length === 0 ? "This Field is required" : null,
      });
    } else if (e.target.name === "weight") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        weightErr:
          e.target.value.length === 0
            ? "This Field is required"
            : null,
      });
    } 
    
    else if (e.target.name === "height") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        heightErr:
          e.target.value.length === 0
            ? "This Field is required"
            : null,
      });
    }

    else if (e.target.name === "age") {
      setUserForm({
        ...userForm,
        age: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        ageErr:
          e.target.value.length === 0
            ? "This Field is required"
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

  return (
    <div className="row"
      style={{
        backgroundImage: `url("https://www.panattasport.com/resources/home/home-fitness-home.jpg")`,
        opacity: 0.8,
        backgroundRepeat:"no-repeat",
        backgroundSize:'100%'
      }}
    >
      <h1 className="h1 pt-5 d-flex justify-content-center">
       <strong>HIGE FITNESS APP</strong></h1>
     
      <div className="container  d-flex justify-content-left ms-5 " style={{color: "#35858B"}}>
        
        <br />
        <form style={{minWidth: "450px", maxWidth: "500px"}} onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <h2 className="h2 mb-5">Register Now!</h2>
            <label htmlFor="exampleInputName" className="form-label h3">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter your name"
              name="namee"
              value={userForm.namee}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">{userFormErrors.nameErr}</small>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label h3">
             Age
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter your age"
              name="age"
              value={userForm.age}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">
                {userFormErrors.ageErr}
              </small>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label h3">
             Weight
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="eg: 70KG"
              name="weight"
              value={userForm.weight}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">
                {userFormErrors.weightErr}
              </small>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label h3">
            Height
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="eg: 180cm"
              name="height"
              value={userForm.height}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">
                {userFormErrors.heightErr}
              </small>
            </div>
          </div>

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

            <div>
              <small className="text-danger">{userFormErrors.emailErr}</small>
            </div>
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
             <small className="text-danger">{userFormErrors.passErr}</small> <br />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputconPassword" className="form-label h3">
              Confirm Password
            </label>
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
                    {userForm.showconPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <small className="text-danger">{userFormErrors.confpasswordErr}
          </small>
          <br />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputGender" className="form-label h3">
              Do you have any chronic diseases?
            </label> <br/>
            <input type="radio" id="yes" name="medical" value="yes" />
            <label for="yes"> &nbsp; Yes</label> &nbsp; &nbsp;
            <input type="radio" id="no" name="medical" value="no"/>
            <label for="no"> &nbsp; No</label>
            </div>
            <br/>

          <button type="submit" id="btn" >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;