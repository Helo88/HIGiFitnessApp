import React, { useEffect, useState, useLayoutEffect ,useContext} from "react";
import "../style/ComStyle.css";
import mylogo from "../images/logo.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";
import {axiosInstance} from '../js/network/index';
import { useHistory,useParams} from 'react-router-dom';
import Swal from "sweetalert2/dist/sweetalert2.js";

const Community = () => {
  const history = useHistory();
  let { id } = useParams();
  console.log("post id ",id)
  const[post,setPost]=useState({})
  const[comment,setComment]=useState({})
  const[commentView,setCommentView]=useState(true)
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

async function handleReportComment(pk){
  Swal.fire({
    title: 'Are You Sure You want to report this comment?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    }
  }).then((result) => {
    if (result.isConfirmed) {
    
      axiosInstance.post(`reportComment/`,{'id':pk})
      .then((res)=>{
         Swal.fire('Comment is reported successfully', '', 'success')
         if(parseInt(res.data.numOfReports)>=5){
          getComments()
        }

      })
      .catch(
        (err)=>{console.log(err)
          Swal.fire('something went wrong', '', 'error')
    })
  }
     else if (result.isDenied) {
      Swal.fire('ok!', '', 'info')
    }
  })
}

async function handleReportPost (pk){
  Swal.fire({
    title: 'Are You Sure You want to report this post?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    }
  }).then((result) => {
    if (result.isConfirmed) {
    
      axiosInstance.post(`reportPost/`,{'id':pk})
      .then((res)=>{
         console.log('resPost',parseInt(res.data.numOfReports))
         Swal.fire('Post is reported successfully', '', 'success')
        if(parseInt(res.data.numOfReports)>=5){
          history.push("/posts")
        }
      })
      .catch(
        (err)=>{console.log(err)
          Swal.fire('something went wrong', '', 'error')
    })
  }
     else if (result.isDenied) {
      Swal.fire('ok!', '', 'info')
    }
  })

}

  return (
    <>
 

      <div className="container-fluid gedf-wrapper pt-0" id="body">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-12 col-md-8 gedf-main">
            <div className="card gedf-card">
              <div className="card-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="posts"
                    role="tabpanel"
                    aria-labelledby="posts-tab"
                  >
                    <div className="form-group" id="postText">
                      <label className="sr-only" for="message">
                      Trainer <span className=""> {post.username} </span> suggests :
                      </label>
                      <i  onClick={()=>{handleReportPost(id)}}
                      title="report post" className="bi bi-x"></i>
                      <textarea
                        className="form-control mt-3"
                        id="message"
                        rows="6"
                       value={post.username?(post.result[0].fields.text):null}
                       disabled
                      ></textarea> 
                     <ClockFill/>  <sub className="px-3">{post.username?(new Date(post.result[0].fields.createdAt).toLocaleString('en-US')):null}</sub>
                     
                     
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
                 <ul className="list-group">
                {postComments.map((comment)=>
                <>
                <li className="list-group-item"id="commentBody" key={comment.pk}> {comment.fields.content}
                </li>
                 <sub>{new Date(comment.fields.createdAt).toLocaleString('en-US')}
                 <i onClick={()=>{handleReportComment(comment.pk)}} 
                 id="report"title="report comment" className="bi bi-x"></i> </sub>
                 </>
                 )}
                </ul>
              </div>
              <div className="card-footer">
                <span href="#" className="card-link" id="com">
                  <ChatDotsFill className="" /> 
                </span>
              { localStorage.getItem('is_staff')=='false'?
                <form className="w-100" id="commentForm"
                onSubmit={handleSubmit}>
                  <input  
                    className="form-control"
                    placeholder="Please Enter your comment"
                    name="content"
                    value={comment.content}
                    onChange={(e) => handleChange(e)}
                  />
                  
                  <button className="my-2" type="submit"> add </button>
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
