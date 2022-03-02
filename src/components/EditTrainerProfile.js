import React, { useEffect, useState } from "react";
import "../style/profile.css";

import { axiosInstance } from "../js/network/index";


const EditTrainerProfile = () => {

    const [postForm,setPostForm]=useState({})

    const handleChange = (e) => {
          setPostForm({
              ...postForm,
              [e.target.name]: e.target.value,
          });
      };
    const handleSubmit = (e) => {
          e.preventDefault();
          console.log(postForm);
              axiosInstance.put('',postForm ,{
                        }).then(()=>{console.log("Profile updated ")
              //showPosts()
             // setShow(false)
              
            })
              .catch(console.log("try again"))
    }
    return (
        <>
        
<form onSubmit={handleSubmit}>
                 
<div id="form" className="container mt-6">
      <div id="title">Edit Personal Information</div>
      
    
      <div className="input-container mt-6">
      <label for="name" className="text-white">Name </label>
        <input id="name" className="mt-2 input" type="text" placeholder=" " />
    
      </div>
      <div className="input-container mt-6">
      <label for="age" className="text-white">Age</label>
        <input id="age" className="mt-2 input" type="text" placeholder=" " />
    
      </div>
      <div className="input-container mt-6">
      <label for="num" className="text-white">Phone Number</label>
        <input id="num" className="mt-2 input" type="text" placeholder=" " />
      </div>
      <div className="input-container mt-6">
      <label for="address" className="text-white">Address</label>
        <input id="address" className="mt-2 input" type="text" placeholder=" " />
      </div>
      <br/><br/>
      <button type="submit" id="submit" className="mt-6 btn ">Save changes</button>
    </div>
                </form>

                </>
  );
};

export default EditTrainerProfile;