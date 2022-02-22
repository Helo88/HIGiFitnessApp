import React, { useEffect, useState, useLayoutEffect } from "react";
import "../style/ComStyle.css";
import mylogo from "../images/logo.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";
import {axiosInstance} from '../js/network/index';
import { useHistory,useParams} from 'react-router-dom';

const Community = () => {
  let { id } = useParams();
  console.log("post id ",id)
  const[post,setPost]=useState({})
  console.log("id ",id)
  const[comment,setComment]=useState({})
  const [myPosts,setPosts]=useState([])
  const [postComments,setPostComments]=useState([])
  const handleChange = (e) => {
		setComment({
			...comment,
			[e.target.name]: e.target.value,
		});
	};
  const handleSubmit = (e) => {
		e.preventDefault();
		console.log("comment is",comment);
    		axiosInstance.post('http://127.0.0.1:8000/addPostComment/',{content:comment.content,id:id} ,{
					  }).then(()=>{console.log("comment submitted ")
             getComments()
          })
            .catch(console.log("try again"))
  }
  function getComments(){
    axiosInstance.post(`http://127.0.0.1:8000/getPostComments/`,{'id':id}, {
      
    })
    .then((data)=>{
      console.log("comments data")
      console.log(data.data.result)
      return data
    // .then((res)=>setTrainerDetail(res))
    // .then(()=>console.log("details ",trainerDetail))
  }).then((data)=>{setPostComments(()=>data.data.result);console.log(postComments)})
  .catch((err)=>console.log(err))
    
  

  }

  useLayoutEffect(()=>{
  const getPost=()=>{
     axiosInstance
    .post(`http://127.0.0.1:8000/getPost/`,{'id':id}, {
      
    })
    .then((data)=>{
      console.log("post data")
      console.log(data.data)
      setPost(()=>data.data)
    // .then((res)=>setTrainerDetail(res))
    // .then(()=>console.log("details ",trainerDetail))
   
  }).then(
    getComments()
  )
   .catch(()=>console.log("false assginment"))
  }
getPost()
},[])




  return (
    <>
 

      <div className="container-fluid gedf-wrapper pt-0" id="body">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 gedf-main">
            <div className="card gedf-card">
              <div className="card-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="posts"
                    role="tabpanel"
                    aria-labelledby="posts-tab"
                  >
                    <div className="form-group">
                      <label className="sr-only" for="message">
                      <span className="text-primary"> {post.username} </span> suggests :
                      </label>
                      <textarea
                        className="form-control mt-3"
                        id="message"
                        rows="3"
                       value={post.username?(post.result[0].fields.text):null}
                       disabled
                      ></textarea>
                     <ClockFill/>  <sub>{post.username?(post.result[0].fields.createdAt):null}</sub>
                    </div>
                  </div>
                </div>
                <br />
             
              </div>
            </div>

            {/* loop to show posts */}
            <div className="card gedf-card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      {/* trainee image */}
                      <img
                        className="rounded-circle"
                        width="45"
                        src={`${mylogo}`}
                      />
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">Trainees Comments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                 <ul>
                {postComments.map((comment)=><li key={comment.pk}> {comment.fields.content}
                <sub>{comment.fields.createdAt}</sub>
                </li>)}
                </ul>
              </div>
              <div className="card-footer">
                <span href="#" className="card-link" id="com">
                  <ChatDotsFill /> 
                </span>
              { localStorage.getItem('is_staff')=='false'?
                <form onSubmit={handleSubmit}>
                  <input  
                    className="form-control"
                    placeholder="Please Enter your comment"
                    name="content"
                    value={comment.content}
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="btn btn-primary" type="submit"> submit </button>
                </form>:
                <></>
}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Community;
