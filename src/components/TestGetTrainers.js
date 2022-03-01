import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";

const Testgettrainers = () => {
    const [trainers,setTrainers]=useState([])

    useEffect(()=>{
        axiosInstance.get("getTrainers/").then((res) => {
          setTrainers(res.data.trainers)
          
          return res
        }).then((res)=>{
          console.log(res.data.trainers)
    
        }).then((res)=>{
          console.log("------------------------------------------------------------------")
          console.log(trainers)
          console.log("------------------------------------------------------------------")
        });
      },[])
      const setTrainer = (id) => {
        axiosInstance.put("getTrainers/",{id:id})
      };
    return (
        <div>
                {
       trainers.map((trainer,index)=>(
        <div
        key={trainer.id}
        className="px-5" >
        <span>
        <button
                  className="btn col-md-3 my-2"
                  id="btnn1"
                  onClick={() => setTrainer(trainer.id)}
        >
                       <span >trainer-{index+1} : </span>{trainer.username}

          </button>
        </span>
  
      </div>        ))
  
    }
        </div>
    );
}

export default Testgettrainers;
