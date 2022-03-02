import { useState } from "react";
import {useHistory} from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DateFnsUtils from '@date-io/date-fns'; // choose your
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Input from "@material-ui/core/Input";
import "../style/Reg.css";
import  {axiosInstance} from "../js/network/index"
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const UserForm = () => {
  const history=useHistory()
  const [opt, setOpt] = useState("false");
  const [optionNum, setOptionNum] = useState(false);
  const[emptyAlert,setEmptyAlert]=useState(false)
  const [userForm, setUserForm] = useState({
    username: "",
    age: "",
    currentWeight: "",
    height: "",
    email: "",
    password : "",
    conpassword : "",
    showPassword: false,
    showconPassword: false,
  });

  const [userFormErrors, setUserFormErrors] = useState({
    usernameErr: null,
    ageErr: null,
    currentWeightErr: null,
    heightErr:null,
    emailErr: null,
    passErr: null,
    confpasswordErr: null,
  });
  // handle time
  const [selectedDate, handleDateChange] = useState(new Date)
  const handleSignup = (error) => {
    if (error.email) {
      NotificationManager.error(error.email[0]);
    } else if (error.username) {
      NotificationManager.error(error.username[0]);
    }
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
  
// need notifactions
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data={
      username:userForm.username,
      currentWeight:userForm.currentWeight,
      height:userForm.height,
      // medicalHistory:optionNum,
      password1:userForm.password,
      password2:userForm.conpassword

    }
  //  console.log("medical ",optionNum,selectedDate.getFullYear()+"-"+selectedDate.getMonth()+"-"+selectedDate.getDay());
    for (let x in data ) {
      if (data[x].length==0){
        console.log(x)
        setEmptyAlert(true)
        return;
      }
    }
    for ( let x in userFormErrors){
      if (userFormErrors[x]!=null){
        console.log(userFormErrors[x])
        NotificationManager.error(userFormErrors[x]);
        return;
      }
 }
    console.log("end")
    axiosInstance
			.post(`users/registration/trainee/`, {
        username:userForm.username,
        dateOfBirth:selectedDate.getFullYear()+"-"+selectedDate.getMonth()+"-"+selectedDate.getDay(),
        currentWeight:userForm.currentWeight,
        height:userForm.height,
        medicalHistory:optionNum,
        password1:userForm.password,
        password2:userForm.conpassword,
        email:userForm.email
			})
      .then(()=>{NotificationManager.success("Verification mail is sent to your mail")})
			.then(() => {
				// // console.log(res);
				// console.log(res.data);
        history.push('/login')
			}).catch((error)=>
      {
        console.log(error.response.data);
        handleSignup(error.response.data);
      })
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
    } else if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        usernameErr: e.target.value.length === 0 ? "This Field is required" : null,
      });
    }

    else if (e.target.name === "currentWeight") {
      setUserForm({
        ...userForm,
        currentWeight: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        currentWeightErr:
          e.target.value.length === 0
            ?"This Field is required"
            :isNaN(e.target.value)
            ?"This Field Must be A Number"
            : null,
      });
    } 
    
    else if (e.target.name === "height") {
      setUserForm({
        ...userForm,
        height: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        heightErr:
          e.target.value.length === 0
            ? "This Field is required"
            :isNaN(e.target.value)
            ?"This Field Must be A Number"
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
            :isNaN(e.target.value)
            ?"This Field Must be A Number"
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
    <>
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
            {emptyAlert?<p className="text-danger">Fill The required Fields</p>:<p></p>}
            <label htmlFor="exampleInputName" className="form-label h3">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter your username"
              name="username"
              value={userForm.username}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">{userFormErrors.nameErr}</small>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label h3">
             Date of Birth
            </label>
          <div>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            className="form-control"
            style={{border:"2px solid white",backgroundColor:"white",width:"500px"}}
          />
            </MuiPickersUtilsProvider>
            </div>
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
              name="currentWeight"
              value={userForm.currentWeight}
              onChange={(e) => handleChange(e)}
              id="exampleInputName"
            />
            <div>
              <small className="text-danger">
                {userFormErrors.currentWeightErr}
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
            <input type="radio" id="yes" name="medical" value="true" 
            onChange={(e)=>{setOpt(e.target.value);setOptionNum(true)}}
            checked={opt === "true"}
            />
            <label for="yes"> &nbsp; Yes</label> &nbsp; &nbsp;
            <input type="radio" id="no" name="medical" value="false" 
            onChange={(e)=>{setOpt(e.target.value);setOptionNum(false)}}
            checked={opt === "false"}
            />
            <label for="no"> &nbsp; No</label>
            </div>
            <br/>
     
          <button type="submit" className="btn" >
            Register
          </button>
        </form>
        <NotificationContainer />
      </div>
      
    </div>
     
     </>
  );
};

export default UserForm;