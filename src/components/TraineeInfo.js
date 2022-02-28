import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosInstance } from "../js/network/index";

const Traineeinfo = (props) => {
    const [favYogaPlan, setfavYogaPlan] = useState([]);
    const [favWorkoutPlan, setfavWorkoutPlan] = useState([]);
    const [waterHistory, setWaterHistory] = useState([]);
    const [weightHistory, setWeightHistory] = useState([]);
    const [userInfo, setuserInfo] = useState([]);
    const location = useLocation()
    let id = location.state
    console.log(id)
    useEffect(() => {

        axiosInstance
          .get(`http://127.0.0.1:8000/traineeInfo/${id}`).then((res) => {
            console.log(res.data.workout)
            console.log(res.data.yoga)
            console.log(res.data.water)
            console.log(res.data.weight)
            console.log(res.data.userInfo)
            setWaterHistory(res.data.water)
            setWeightHistory(res.data.weight)
            setuserInfo(res.data.userInfo)
            setfavWorkoutPlan(res.data.workout[0].fields);
            setfavYogaPlan(res.data.yoga[0].fields);
            // setWaterHistory(waterHistory.reverse())

          }).then(res=>{
            console.log(userInfo)
            console.log(waterHistory)
            console.log(weightHistory)
          });
           },[])


           
    return (
      <>
        <div className='py-2'><span className='h3'>UserName: </span>{userInfo.username}</div>
        <div className='py-2'><span className='h3'>Email: </span >{userInfo.email}</div>
        <div className='py-2'><span className='h3'>Age: </span >{userInfo.age}</div>
        <div className='py-2'><span className='h3'>medical History: </span >{userInfo.medicalHistory==false?"No":"Yes"}</div>
        <div className='py-2'><span className='h3'>Workout Plan: </span>{favWorkoutPlan.name}</div>
        <div className='py-2'><span className='h3'>Yoga Plan: </span>{favYogaPlan.name}</div>
  
  <h1 className='text-danger text-center h1'>Water Report</h1>      
  {
    waterHistory.map((day,index)=>(
      <div
      key={day.id}
      className="px-5" >
      <span>
         <span>Day-{index+1} : </span>{day.dailyAmount}
      </span>

    </div>        )).reverse()
  }
  <h1 className='text-danger text-center h1'>Weight Report</h1>      

  {
    
    weightHistory.map((day,index)=>(
      <div
      key={day.id}
      className="px-5" >
            <span>
         <span>Day-{index+1} : </span>{day.fields.traineeWeight}
      </span>


      <br />
    </div>  
          )).reverse()
  }

    </>
    );
}

export default Traineeinfo;
