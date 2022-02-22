import React, { useEffect, useState } from "react";
import "../style/trainerProfile.css";
import mylogo from "../images/logo.jpg";
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
  const [postForm, setPostForm] = useState({});
  const [myPosts, setPosts] = useState([]);
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
  return (
    <>
   
      <div class="container">
        <div class="main-body">
          <div class="row mt-6">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src=""
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    </div>
                    <div class="mt-3 d-flex flex-column align-items-center text-center">
                      <h4>{localStorage.getItem("username")}</h4>
                      <p class="text-secondary mb-1">Fitness Trainer</p>
                      </div>
                      <br/> <br/>
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
                          setShow(false);
                          showPosts();
                        }}
                      >View My Posts
                      </button>
                      <button className="btn col-md-2" id="btnn3">
                        Review Clients
                      </button>
                      <Link to={"/editTrainer"}><button className="btn col-md-3" id="btnn4">
                        Edit Personal Information
                      </button></Link>
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
                    <br/><br/>
                    <button className="btn" type="submit" id="btnn5">
                      {" "}
                      submit post
                    </button>
                  </form>
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
