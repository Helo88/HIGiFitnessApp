import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";
import "../components/Homepage"
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import mylogo from "../images/logo.jpg";


const ChooseTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("getTrainers/")
      .then((res) => {
        setTrainers(res.data.trainers);

        return res;
      })
      .then((res) => {
        console.log(res.data.trainers);
      })
      .then((res) => {
        console.log(
          "------------------------------------------------------------------"
        );
        console.log(trainers)
        console.log(
          "------------------------------------------------------------------"
        );
      });
  }, []);
  const chooseTrainer = (id) => {
    axiosInstance.put("getTrainers/", { id: id });
    NotificationManager.success("Trainer is chosen successfully");

  };
  return (
    <>
    <div className="ch" style={{paddingTop:"5em"}}>
<div className="container">
<h1 className="f h1 d-flex justify-content-center my-5">
        Choose Your  <span className="text-info">Trai</span>ner&nbsp;
      </h1>
    <br/>

    <div className="container me-5">
      <div className="row justify-content-center">
      <div className="card col-4 mx-2" >
            <div className="user-image">
              <img
                    src={mylogo}
                    className="img-radius"
                alt="User-Profile-Image"
              />
            </div>

            <div className="card-body">
              <h5 id="uname" className="card-title text-center">Username : HiGE Fitness App</h5>
          
              <div className="text-center">
                <br/>
                <br/>
                <button
                  className="btn "
                  id="btnnxx"
                  onClick={() => chooseTrainer(0)}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        {trainers.map((trainer, index) => (
          <>
          <div className="card col-4 mx-4" >
            <div className="user-image">
              <img
                src={`http://localhost:8000/media/${trainer[2]}`}
                className="img-radius"
                alt="User-Profile-Image"
              />
            </div>

            <div className="card-body text-center">
              <h5 id="uname" className="card-title ">Username : {trainer[1]}</h5>
              <ul>

              <li className="card-text">Gender : {trainer[3]}</li>
                <li className="card-text">Description : {trainer[4]}</li>
              </ul>
              <div className="text-center">
                <br/>
                <button
                  className="btn "
                  id="btnnxx"
                  onClick={() => chooseTrainer(trainer[0])}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
           </>
        ))}

        </div>
      </div>
</div>
</div>
    </>
  );
};
export default ChooseTrainer;