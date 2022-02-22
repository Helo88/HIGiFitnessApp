import React, { useEffect, useState } from "react";
import "../style/trainerProfile.css";
import mylogo from "../images/logo.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";
import {axiosInstance} from '../js/network/index';
import { useHistory } from 'react-router-dom';
import {Form, Modal,Button,InputGroup,FormControl,ModalTitle,ModalBody,ModalFooter,ModalHeader} from 'react-bootstrap';
import { post } from "jquery";
import { Link } from "react-router-dom";

const TrainerProfile = () => {
  // const[trainerDetail,setTrainerDetail]=useState({})
  const [show, setShow] = useState(true);
  const [postForm,setPostForm]=useState({})
  const [myPosts,setPosts]=useState([])
  const handleChange = (e) => {
		setPostForm({
			...postForm,
			[e.target.name]: e.target.value,
		});
	};
  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(postForm);
    		axiosInstance.post('http://127.0.0.1:8000/posts/',postForm ,{
					  }).then(()=>{console.log("post submitted ")
            showPosts()
            setShow(false)
            
          })
            .catch(console.log("try again"))
  }
  const showPosts=()=>{
    axiosInstance.get('getTrainerPosts/').then((data)=>{console.log(data.data)
    setPosts((data.data.result).reverse())
    console.log(myPosts)
    })
  }
  useEffect(()=>{
    showPosts()
    setShow(false)
  },[])
  return (
    <>
 
 <div class="container">
    <div class="main-body">

          <div class="row gutters-sm">
            <div class="col-md-5 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{localStorage.getItem('username')}</h4>
                      <p class="text-secondary mb-1">Fitness Trainer</p>
                      
                      <button class="btn btn-outline-primary" onClick={()=>setShow(true)} >Add New Post</button>
                      <button class="btn btn-outline-primary" onClick={()=>{setShow(false);showPosts()}} >View My Posts </button>
       <button class="btn btn-outline-primary">Review Clients</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
              <div class="card mb-3">
                <div class="card-body">

                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {localStorage.getItem('email')}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {localStorage.getItem('phone')}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">age</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {localStorage.getItem('age')}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {localStorage.getItem('address')}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

           
              </div>
            </div>
            <div class="col-md-7">
         
            <>

              { show ?
                <form onSubmit={handleSubmit}>
                  <textArea  
                    className="form-control"
                    placeholder="Please Enter your post"
                    name="text"
                    value={postForm.text}
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="btn btn-primary" type="submit"> submit post</button>
                </form>
                :
                <>
                <h1 className="text-dark bg-danger">My Posts</h1>
                <ul class="list-group list-group-flush">
                  <p> Numbers of posts: {myPosts.length}</p>
                 { myPosts.map((post)=>{return <li className="text-dark" key={post.pk}>
                   
                 <Link to={`/comm/${post.pk}`}>
                 {post.fields.text}
                 </Link>
                   
                   </li> } )}
                </ul>
                </>
}
                </>



            </div>
          </div>

        </div>
    </div>
     
    </>
  );
};

export default TrainerProfile;
