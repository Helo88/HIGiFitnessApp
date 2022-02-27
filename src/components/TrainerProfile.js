import React, { useEffect, useState } from "react";
import "../style/trainerProfile.css";
import avatar from "../images/av.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";
import { axiosInstance } from "../js/network/index";
import { useHistory } from "react-router-dom";
import {
  Form,
  Modal,
  Button,
  InputGroup,
  FormControl,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
//import { post } from "jquery";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const TrainerProfile = () => {
  // const[trainerDetail,setTrainerDetail]=useState({})
  const [show, setShow] = useState(true);
  const [check, setCheck] = useState(false);
  const [postForm, setPostForm] = useState({});
  const [myPosts, setPosts] = useState([]);
  const [clients, setClients] = useState([]);
  const handleChange = (e) => {
    setPostForm({
      ...postForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postForm);
    axiosInstance
      .post("http://127.0.0.1:8000/posts/", postForm, {})
      .then(() => {
        console.log("post submitted ");
        showPosts();
        setShow(false);
      })
      .catch(console.log("try again"));
  };
  const showPosts = () => {
    axiosInstance.get("getTrainerPosts/").then((data) => {
      console.log(data.data);
      setPosts(data.data.result.reverse());
      console.log(myPosts);
    });
  };
  const showClients = () => {
    axiosInstance.get("getTrainerClients/").then((data) => {
      console.log("kmckjdllldlkl", data.data.result);
      setClients(data.data.result.reverse());
      console.log(clients);
    });
  };
  return (
    <>
      <div class="container">
        <div class="main-body">
          <div class="row mt-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src={`http://localhost:8000/media/${localStorage.getItem(
                      "image"
                    )}`}
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                </div>
                <div class="mt-3 d-flex flex-column align-items-center text-center">
                  <h4>{localStorage.getItem("username")}</h4>
                  <p class="text-secondary mb-2">Fitness Trainer</p>
                </div>
                <div className="row mt-3  text-black">
                  <div className="col-5">Name </div>
                  <div className="col-5">Status </div>
                  <div className="col-2 ">Age </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-5">
                    {localStorage.getItem("username")}
                  </div>
                  <div className="col-5">Active</div>
                  <div className="col-2">{localStorage.getItem("age")}</div>
                </div>
                <div className="row mt-3  text-black">
                  <div className="col-5">Email </div>
                  <div className="col-5 ">Address </div>
                  <div className="col-2 ">Phone </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-5">{localStorage.getItem("email")}</div>
                  <div className="col-5">
                    {localStorage.getItem("address")}{" "}
                  </div>
                  <div className="col-2">{localStorage.getItem("phone")} </div>
                </div>
                <br /> <br />
                <button
                  className="btn col-md-3"
                  id="btnn1"
                  onClick={() => setShow(true)}
                >
                  Add New Post
                </button>
                <button
                  className="btn col-md-3"
                  id="btnn2"
                  onClick={() => {
                    setCheck(false);
                    setShow(false);
                    showPosts();
                  }}
                >
                  View My Posts
                </button>
                <button
                  className="btn col-md-2"
                  id="btnn3"
                  onClick={() => {
                    setShow(false);
                    setCheck(true);
                    showClients();
                  }}
                >
                  Review Clients
                </button>
                <Link to={"/editTrainer"}>
                  <button className="btn col-md-3" id="btnn4">
                    Edit Personal Information
                  </button>
                </Link>
              </div>
            </div>

            <div class="row mt-6">
              <>
                {show ? (
                  <form onSubmit={handleSubmit}>
                    <textarea
                      className="form-control"
                      placeholder="Please Enter your post"
                      name="text"
                      value={postForm.text}
                      onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <br />
                    <button className="btn" type="submit" id="btnn5">
                      {" "}
                      submit post
                    </button>
                  </form>
                ) : check ? (
                  <>
                    <h1 className="text-white bck">Clients</h1>
                    <ul class="list-group list-group-flush">
                      {clients.map((client) => {
                        return (
                          <div className="text-center" key={client.pk}>
                            <Link
                              to={{
                                pathname: "/workoutexercises",
                                state: client.pk,
                              }}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                src={`${avatar}`}
                              />
                              {client.fields.age}
                            </Link>
                            <br />
                          </div>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <>
                    <h1 className="text-white bck">My Posts</h1>
                    <ul class="list-group list-group-flush">
                      <p> Numbers of posts: {myPosts.length}</p>
                      {myPosts.map((post) => {
                        return (
                          <li className="text-dark" key={post.pk}>
                            <Link to={`/comm/${post.pk}`}>
                              {post.fields.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerProfile;
