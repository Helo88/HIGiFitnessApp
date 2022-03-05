import React, { useEffect, useState } from "react";
import avatar1 from "../images/avatar.jpg";
import avatar2 from "../images/g.jpg";
import avatar3 from "../images/r.png";
import avatar4 from "../images/av.jpg";
import { axiosInstance } from "../js/network/index";

const TraineeProfile = (props) => {
  const { WorkoutPlans, YogaPlans } = props;
  const avatar = [avatar1, avatar2, avatar3, avatar4];
  const [trainerName, setTrainerName] = useState();
  useEffect(()=>{
  axiosInstance
    .get("getTrainerName/")
    .then((res) => {
      setTrainerName(res.data.result);
      console.log(res.data)
      return res;
    }).then((res)=>{
      console.log(trainerName)
    })
  },[])

  useEffect(() => {}, [
    localStorage.getItem("workoutPlan"),
    localStorage.getItem("yogaPlan"),
  ]);
  return (
    <>
      <br />
      <br />
      <div id="tp">
      <div className="container text-center" style={{paddingTop:"5em"}}>
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8">
            <div className="bg-white user-card">
              <div className="card-header">
                <h5>Personal Profile</h5>
              </div>
              <div className="card-block">
                <div className="user-image">
                  <img
                    src={avatar[Math.floor(Math.random() * avatar.length)]}
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                </div>
                <h6 className="f-w-600 m-t-25 m-b-10">
                  {localStorage.getItem("username")}
                </h6>
                <hr />

                <div className="bg-c counter-block m-t-10 p-20 text-black">
                  <div className="row">
                    <div className="col-4"></div>
                    <i className="fa fa-user"></i>
                    <p>Personal Information</p>
                  </div>
                </div>
                <div className="row mt-3  text-black">
                  <div className="col-4">Name </div>
                  <div className="col-3">Status </div>
                  <div className="col-5 ">Email </div>
                </div>
                <div className="row mt-4 ">
                  <div className="col-4">
                    {localStorage.getItem("username")}{" "}
                  </div>
                  <div className="col-3">Active</div>
                  <div className="col-5">{localStorage.getItem("email")} </div>
                </div>
                <div className="row mt-3  text-black">
                  <div className="col-4">Age</div>
                  <div className="col-3">Height</div>
                  <div className="col-5">Initial Weight</div>
                </div>

                <div className="row mt-4 ">
                  <div className="col-4">{localStorage.getItem("age")}</div>
                  <div className="col-3">{localStorage.getItem("height")}</div>
                  <div className="col-5">
                    {localStorage.getItem("currentWeight")}
                  </div>
                </div>

                <div className="bg-c counter-block m-t-10 p-20 text-black">
                  <div className="row">
                    <div className="col-4"></div>
                    <i className="fa fa-user"></i>
                    <p>Workout Information</p>
                  </div>
                </div>
                <div className="row mt-3  text-black">
                  <div className="col-4 ">Trainer Name </div>
                  <div className="col-4">Plan Name </div>
                  <div className="col-4">Plan Category </div>
                </div>
                <div className="row mt-4 ">
                <div className="col-4">{trainerName}</div>
                  <div className="col-4">
                  
                    {parseInt(localStorage.getItem("workoutPlan"))
                      ? WorkoutPlans.filter(
                          (e) =>
                            e.id === Number(localStorage.getItem("workoutPlan"))
                        )[0].name
                      : "No Chosen Plans"}
                  </div>
                  <div className="col-4">Workout Plans </div>
                </div>
                <div className="row mt-4 ">
                <div className="col-4">{trainerName}</div>
                  <div className="col-4">
                    {parseInt(localStorage.getItem("yogaPlan"))
                      ? YogaPlans.filter(
                          (e) =>
                            e.id === Number(localStorage.getItem("yogaPlan"))
                        )[0].name
                      : "No Chosen Plans"}{" "}
                  </div>
                  <div className="col-4">Yoga Plans </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TraineeProfile;
