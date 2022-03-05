import React, { useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Activity, HeartHalf } from "react-bootstrap-icons";
import myimg from "../images/photo-1516207925197-a1eebfc9684b.jpeg";
import aboutus from "../images/istockphoto-1301243325-170667a.jpg";
import "../style/Homepage.css";
import { Link } from "react-router-dom";
import yoga from "../images/istockphoto-1328846947-170667a.jpg";
import workout from "../images/photo-1571019613454-1cb2f99b2d8b.jpeg";
import weight from "../images/istockphoto-641963334-170667a.jpg";
import water from "../images/istockphoto-1299849671-170667a.jpg";
import community from "../images/istockphoto-1309560647-170667a.jpg";
import coaching from "../images/photo-1612957803626-1bf65224ff68.jpeg";
import { axiosInstance } from "../js/network/index";
import { useHistory } from "react-router-dom";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${myimg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    opacity: 1.5,
  },
}));

export default function Homepage() {
  const history = useHistory();
  const classnamees = useStyles();
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
  let token = localStorage.getItem("token");
  let is_staff = localStorage.getItem("is_staff");
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
  const traineenotify = () => {
    NotificationManager.info("Your are already with us as a trainee");
  };
  const handleWorkout = () => {
    history.push("/workoutplans");
  };
  const handleYoga = () => {
    history.push("/yogaplans");
  };
  const handleCoaching = () => {
    if (is_staff === "true") {
      NotificationManager.info("this service is just for trainee");
    } else {
      history.push("/choosetrainer");
    }
  };
  const handleWater = () => {
    if (is_staff === "true") {
      NotificationManager.info("this service is just for trainee");
    } else {
      history.push("/water");
    }
  };
  const handleWeight = () => {
    if (is_staff === "true") {
      NotificationManager.info("this service is just for trainee");
    } else {
      history.push("/we");
    }
  };
  const handlCommunity = () => {
    history.push("/posts");
  };
  return (
    <>
      <div className={classnamees.root}>
        <CssBaseline />
        <div className="row">
          <h1 className="des h1 col ms-5">
            {" "}
            <strong>
              <span className="des1">DON'T DIE </span>
              <span className="des2">WITHOUT EXPLORING </span>
              <br />
              <span className="des3">WHAT YOUR BODY </span>
              <span className="des4">IS TRULY </span> <br />
              <span className="des5">CAPABLE OF </span>
            </strong>
          </h1>
          <div className="col me-4"></div>
        </div>
      </div>
      <section id="about">
        <div className=" container">
          <div className="row ">
            <div>
              <h1 className="title">
                Welcome to H<span>I</span>G<span>E</span>
                <span>
                  <Activity /> &nbsp;
                </span>
              </h1>
            </div>
            <div className="us1 col-lg-6 col-md-12 col-sm-12">
              <h3>Why Choose Us ?!</h3>
              <br></br>
              <p>
                We Will Help You To Make Your Own Gym At Home,How?! <br></br>
                we follow up your progress during the week by tracking every
                thing you do to have a Balance Healthy Life <br></br>
              </p>
              <p>
                You freely to choose between trainers to have their observation
                on you, and if you did not we will follow you up ,so you can be
                at the gym <br></br>, and at your home in the same time ...{" "}
                <br></br>
              </p>
              <br></br>
              <Link to="/signup">
                <button className="btn" id="btn2">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="us2 card col-lg-6 col-md-12 col-sm-12">
              <img src={`${aboutus}`} alt="about us"></img>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="title">
                <span>
                  <HeartHalf />
                </span>
                SERVICE WE <span>PROVIDE</span>
              </h1>
              <br></br>
              <h3>That What We Made For You ...</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleWorkout()}
            >
              <div className="img-holder">
                <img src={`${workout}`} alt="workout img"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>Workout Plans</h3>
              </div>
            </div>
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleYoga()}
            >
              <div className="img-holder">
                <img src={`${yoga}`} alt="yoga img"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>Yoga Plans</h3>
              </div>
            </div>
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleCoaching()}
            >
              <div className="img-holder">
                <img src={`${coaching}`} alt="coaching img"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>Coaching</h3>
              </div>
            </div>
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleWater()}
            >
              <div className="img-holder">
                <img src={`${water}`} alt="water tracker"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>Water Tracker</h3>
              </div>
            </div>
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleWeight()}
            >
              <div className="img-holder">
                <img src={`${weight}`} alt="weight tracker"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>Weight Tracker</h3>
              </div>
            </div>
            <div
              className="item col-lg-4 col-md-6 col-sm-12"
              onClick={() => handlCommunity()}
            >
              <div className="img-holder">
                <img src={`${community}`} alt="community img"></img>
              </div>
              <span></span>
              <span></span>
              <div className="img-content">
                <h3>
                  Small Community <br></br>For Us
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="item col-lg-12 col-md-12 col-sm-12">
              <h2 className="te">Best Creative Coaching Team In The World</h2>
              {token && is_staff === "true" ? (
                <Link to="/trainer">
                  <button className="btn" id="btn2">
                    Join Our Team
                  </button>
                </Link>
              ) : token && is_staff === "false" ? (
                <Link to="/">
                  <button
                    className="btn"
                    id="btn2"
                    onClick={() => traineenotify()}
                  >
                    Join Our Team
                  </button>
                </Link>
              ) : (
                <Link to="/joinus">
                  <button className="btn" id="btn2">
                    Join Our Team
                  </button>
                </Link>
              )}

              <span className="first"></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" name="contact">
        <div className=" container-fluid">
          <div className="row n1">
            <div className="item col-lg-3">
              <h4>ABOUT US</h4>
              <hr></hr>
              <p>We Will Help You To Make Your Own Gym At Home</p>
              <p>
                We Will Help You Low Energy Stress , Anxiety, and choose your
                favourite Workout or Yoga Routines
              </p>
              <p>So You Can Have A Balance Healthy Life</p>
            </div>
            <div className="item col-lg-3 landing footerlogo">
              <h1>
                H<span>i</span>G<span>E</span>
              </h1>
              <h3>
                @copyright 2022{" "}
                <span>
                  <i className="fas fa-heart"></i>
                </span>{" "}
                HiGE
              </h3>
            </div>
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
                <button type="submit" className="btn" id="btn2">
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* ***************************************** */}
        </div>
      </section>
      <NotificationContainer />
    </>
  );
}