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
  // console.log("post id ",id)
  const[post,setPost]=useState({})
  const [userPk,setUserPk]=useState(parseInt(localStorage.getItem('pk')))
  const [postOwner,setPostOwner]=useState(" ")
  const [postOwnerPk,setPostOwnerPk]=useState(" ")
  const [reportedComment,setReportedComment]=useState(0)
  // console.log('this pk ',userPk)
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
  }).then((data)=>{setPostComments(()=>(data.data.result).reverse());console.log(postComments)})
  .catch((err)=>console.log(err))
    
  

  }

  useLayoutEffect(()=>{
  const getPost=()=>{
     axiosInstance
    .post(`http://127.0.0.1:8000/getPost/`,{'id':id}, {
      
    })
    .then((data)=>{
      // console.log("post data")
      console.log(((data.data.result)[0]).fields.owner)
      setPostOwner(data.data.username)
       setPostOwnerPk(((data.data.result)[0]).fields.owner)
      setPost(()=> ((data.data.result)[0]).fields)
   
  })
  .then(()=>{
    getComments()
   
  })
   .catch(()=>{}
 
   )
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
        setReportedComment(pk)
        // console.log("reported comment : ",pk)
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
async function editComment(pk) {
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Edit Comment',
    inputPlaceholder: 'Type your Comment here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire("comment is updated successfully")
    axiosInstance.put(`/comments/${pk}/`,{'content':text})
    .then(()=>{
      Swal.fire('Comment is updated successfully', '', 'success')
      getComments()
      
    })
    .catch(
      (err)=>{
        // console.log(err)
        Swal.fire('Something went wrong!', '', 'danger')
    })
  }

}
async function deleteComment(pk){
  Swal.fire({
    title: 'Are You Sure You want to delete this comment?',
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
    
      axiosInstance.delete(`/comments/${pk}/`)
      .then(()=>{
         Swal.fire('Comment is deleted successfully', '', 'success')
         getComments()
        // NotificationManager.success("updated")
        
      })
      .catch(
        (err)=>{console.log(err)
          Swal.fire('Something went wrong!', '', 'danger')
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
        <div className="row" style={{paddingTop:"9em"}}>
          <div className="col-md-2"></div>
          <div className="col-6 col-md-8 gedf-main">
            <div className="bg-white gedf-card">
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
                      Trainer <span className=""> {postOwner} </span> suggests :
                      </label>
                     {
                      postOwnerPk===userPk ?<></>:
                      <i  onClick={()=>{handleReportPost(id)}}
                       title="report post" className="bi bi-x"></i>
                     }
                      
                       <textarea
                        className="form-control mt-3"
                        id="message"
                        rows="6"
                       value={post.text}
                       disabled
                      ></textarea>  
                     <ClockFill/>  <sub className="px-3">{}</sub>
                     <sub>{new Date(post.createdAt).toLocaleString('en-US')}</sub>
                     
                    </div>
                  </div>
                </div>
                <br />
             
              </div>
            </div>

            {/* loop to show posts */}
            <div className="bg-white gedf-card">
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
            
                <li className="list-group-item"
                style={{display : comment.pk === reportedComment ? 'none' :' ' }}
                id="commentBody"
                
                key={comment.pk}> 
               
                {comment.fields.content}
               
                </li>
                 <sub
                 style={{display : comment.pk === reportedComment ? 'none' :' ' }}
                 >{new Date(comment.fields.createdAt).toLocaleString('en-US')}
               { comment.fields.owner === userPk ?
               <>
               
               <i title="edit comment" onClick={()=>editComment(comment.pk)} className="bi bi-pencil p-1"></i>
               <i title="delete comment" onClick={()=>deleteComment(comment.pk)}  className="bi bi-x-lg text-danger p-1"></i>
               </> 
               
               :
                <i onClick={()=>{handleReportComment(comment.pk)}} 
                 id="report"title="report comment" className="bi bi-x"></i>} </sub>
                 </>
                

                 )}

              
                </ul>
              </div>
              <div className="card-footer">
                <span href="#" className="card-link" id="com">
                  <ChatDotsFill className="" /> 
                </span>
              
                <form className="w-100" id="commentForm"
                onSubmit={handleSubmit}>
                  <input  
                    className="form-control"
                    placeholder="Please Enter your comment"
                    name="content"
                    value={comment.content}
                    onChange={(e) => handleChange(e)}
                  />
                  
                  <button className="btn mt-1" id="my-2" type="submit"> add </button>
                </form>
            

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Community;