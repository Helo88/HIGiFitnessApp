import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";
import "../style/Homepage.css"
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const JoinUs = () => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [joinFormErrors, setJoinFormErrors] = useState({
    emailErr: null,
    nameErr: null,
    contentErr: null,
  });
  //  join form states
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setJoinForm({
        ...joinForm,
        email: e.target.value,
      });

      setJoinFormErrors({
        ...joinFormErrors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is required"
            : emailReg.test(e.target.value) === false
            ? "Email is Not Correct"
            : null,
      });
    } else if (e.target.name === "name") {
      setJoinForm({
        ...joinForm,
        name: e.target.value,
      });

      setJoinFormErrors({
        ...joinFormErrors,
        nameErr: e.target.value.length === 0 ? "This Field is required" : null,
      });
    } else if (e.target.name === "content") {
      setJoinForm({
        ...joinForm,
        content: e.target.value,
      });

      setJoinFormErrors({
        ...joinFormErrors,
        contentErr:
          e.target.value.length === 0 ? "This Field is required" : null,
      });
    } else {
    }
  };
  //  join form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // check for empty fields if any is empty won't call the api
    for (let x in joinForm) {
      if (joinForm[x].length == 0) {
        console.log(x);
        // notification fill the required fields
        NotificationManager.error("Fill The empty Fields");
        return;
      }
    }
    axiosInstance
      .post("http://127.0.0.1:8000/users/joinUs/", {
        name: joinForm.name,
        email: joinForm.email,
        content: joinForm.content,
      })
      .then(() => {
        //  notification msg sent
        NotificationManager.success("Your Message is sent Successfully");
      })
      .catch((error) => {
        console.log(error);
        //  notification  something went wrong
        NotificationManager.error("Something went wrong");
      });
  };
  return (
    <>
      <h1 className="f h1 d-flex justify-content-center mt-5">
        Join Our Amazing <span className="text-info">Team</span>&nbsp;
      </h1>

      <section id="contact" name="contact">
        <div className=" container-fluid">
          <div className="row n1 landing">
            <div className="item col-lg-3">
              <h4>CONTACT US</h4>
              <hr></hr>
              <form onSubmit={(e, name) => handleSubmit(e, name)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="name"
                    placeholder="Enter your name"
                    value={joinForm.name}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <div>
                    <small className="text-danger">
                      {joinFormErrors.nameErr}
                    </small>
                  </div>
                </div>
                <br></br>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={joinForm.email}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <div>
                    <small className="text-danger">
                      {joinFormErrors.emailErr}
                    </small>
                  </div>
                </div>
                <br></br>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                    name="content"
                    placeholder="Enter your message"
                    value={joinForm.content}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  <div>
                    <small className="text-danger">
                      {joinFormErrors.contentErr}
                    </small>
                  </div>
                </div>
                <button type="submit" className="btn" id="btn2" style={{width:"10vw"}}>
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* ***************************************** */}
        </div>
          <NotificationContainer />
      </section>
    </>
  );
};
export default JoinUs;
