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
    // 
    useEffect(() => {
      axiosInstance
          .get(`http://127.0.0.1:8000/traineeInfoData/${id}`)
          .then((res)=>{
            console.log(res.data.userInfo)
            setuserInfo(res.data.userInfo)

          }).then(()=>{
            console.log(userInfo)

          })
    },[])
    useEffect(() => {

        axiosInstance
          .get(`http://127.0.0.1:8000/traineeInfo/${id}`).then((res) => {
            console.log(res.data.workout)
            console.log(res.data.yoga)
            console.log(res.data.water)
            console.log(res.data.weight)
            setWaterHistory(res.data.water)
            setWeightHistory(res.data.weight)
            if(res.data.workout[0].fields){
               setfavWorkoutPlan(res.data.workout[0].fields);
            }
            else{
              setfavWorkoutPlan(res.data.workout);
            }
            if(res.data.yoga[0].fields){
              setfavYogaPlan(res.data.yoga[0].fields);
            }
           else{
             setfavYogaPlan(res.data.yoga);
           }

          }).then(res=>{
            console.log(typeof(waterHistory))
            console.log("type is :"+typeof(favWorkoutPlan))
            console.log("fav is :"+favWorkoutPlan)
            console.log("type is :"+typeof(favYogaPlan))
            console.log("fav is :"+favYogaPlan)
            
          });
           },[])


           
    return (
      <>
        <div className='p-2'><span className='h3'>UserName: </span>{userInfo.username}</div>
        <div className='p-2'><span className='h3'>Email: </span >{userInfo.email}</div>
        <div className='p-2'><span className='h3'>Age: </span >{userInfo.age}</div>
        <div className='p-2'><span className='h3'>medical History: </span >{userInfo.medicalHistory==false?"No":"Yes"}</div>
        {typeof(favWorkoutPlan)!="string"?
        <div className='p-2'><span className='h3'>Workout Plan: </span>{favWorkoutPlan.name}</div>
        :<div className='p-2'><span className='h3'>Workout Plan: </span> {favWorkoutPlan}</div>
      }
      {typeof(favYogaPlan)!="string"?
        <div className='p-2'><span className='h3'>Yoga Plan: </span>{favYogaPlan.name}</div>
        :<div className='p-2'><span className='h3'>Yoga Plan: </span> {favYogaPlan}</div>

    }
  <h1 className='text-danger text-center h1'>Water Report</h1>      
  {
    typeof(waterHistory)!="string"?
    waterHistory.map((day,index)=>(
      <div
      key={day.id}
      className="px-5" >
      <span>
         <span>Day-{index+1} : </span>{day.dailyAmount}
      </span>

    </div>        )).reverse()
    :<div className='text-center'> <h3>{waterHistory}</h3></div>
  }
  <h1 className='text-danger text-center h1'>Weight Report</h1>      

  {
    typeof(weightHistory)!="string"?
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
          :<div className='text-center'> {weightHistory}</div>
        }

    </>
    );
}

export default Traineeinfo;
