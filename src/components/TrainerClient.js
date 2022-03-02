import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosInstance } from "../js/network/index";
import "../style/TrainerClients.css";
import avatar1 from "../images/avatar.jpg";
import avatar2 from "../images/g.jpg";
import avatar3 from "../images/r.png";
import avatar4 from "../images/av.jpg";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const TrainerClient = (props) => {
  const [favYogaPlan, setfavYogaPlan] = useState([]);
  const [favWorkoutPlan, setfavWorkoutPlan] = useState([]);
  const [waterHistory, setWaterHistory] = useState([]);
  const [weightHistory, setWeightHistory] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  const location = useLocation();
  const avatar = [avatar1, avatar2, avatar3, avatar4];
  let id = location.state;
  console.log(id);
  //
  useEffect(() => {
    axiosInstance
      .get(`http://127.0.0.1:8000/traineeInfoData/${id}`)
      .then((res) => {
        console.log(res.data.userInfo);
        setuserInfo(res.data.userInfo);
      })
      .then(() => {
        console.log(userInfo);
      });
      console.log(userInfo)

  }, []);
  useEffect(() => {
    axiosInstance
      .get(`http://127.0.0.1:8000/traineeInfo/${id}`)
      .then((res) => {
        console.log(res.data.workout);
        console.log(res.data.yoga);
        console.log(res.data.water);
        console.log(res.data.weight);
        setWaterHistory(res.data.water);
        setWeightHistory(res.data.weight);
        if (res.data.workout[0].fields) {
          setfavWorkoutPlan(res.data.workout[0].fields);
        } else {
          setfavWorkoutPlan(res.data.workout);
        }
        if (res.data.yoga[0].fields) {
          setfavYogaPlan(res.data.yoga[0].fields);
        } else {
          setfavYogaPlan(res.data.yoga);
        }
      })
      .then((res) => {
        console.log(typeof waterHistory);
        console.log("type is :" + typeof favWorkoutPlan);
        console.log("fav is :" + favWorkoutPlan);
        console.log("type is :" + typeof favYogaPlan);
        console.log("fav is :" + favYogaPlan);
      });
  }, []);
  const acceptPlan = () => {
    console.log("accepted");
    NotificationManager.success("you accepted your trainee choice");
  };
  return (
    <>
      <div className="container-fliud">
        <div className="padding">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-white">
                      <div className="row text-center">
                        <div className="m-b-25 user-image">
                          {" "}
                          <img
                            src={
                              avatar[Math.floor(Math.random() * avatar.length)]
                            }
                            className="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                        </div>
                        <h6 className="f-w-600">{userInfo.username}</h6>
                      </div>
                      <br />
                      <br />

                      <h4 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Username</p>
                          <h6 className="text-muted f-w-400">
                            {userInfo.username}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Initial Weight</p>
                          <h6 className="text-muted f-w-400">
                            {userInfo.currentWeight}
                          </h6>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Age</p>
                          <h6 className="text-muted f-w-400">{userInfo.age}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Medical History</p>
                          <h6 className="text-muted f-w-400">
                            {" "}
                            {userInfo.medicalHistory === false ? "No" : "Yes"}
                          </h6>
                        </div>
                      </div>
                      <br />
                      <h4 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Plans
                      </h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Workout Plan</p>
                          {typeof favWorkoutPlan != "string" ? (
                            <h6 className="text-muted f-w-400">
                              {favWorkoutPlan.name}
                            </h6>
                          ) : (
                            <h6 className="text-muted f-w-400">
                              {favWorkoutPlan}
                            </h6>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Yoga Plan</p>
                          {typeof favYogaPlan != "string" ? (
                            <h6 className="text-muted f-w-400">
                              {favYogaPlan.name}
                            </h6>
                          ) : (
                            <h6 className="text-muted f-w-400">
                              {favYogaPlan}
                            </h6>
                          )}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="row">
                        <div className="col">
                          <Link
                            to={{
                              pathname: "/chooseworkoutplan",
                              id: id,
                              favYogaPlan: favYogaPlan,
                            }}
                          >
                            <button type="button" className="btn btn-light">
                              Edit Plan
                            </button>
                          </Link>
                        </div>
                        <div className="col">
                          <Link
                            to={{
                              pathname: "/chooseyogaplan",
                              id: id,
                              favWorkoutPlan: favWorkoutPlan,
                            }}
                          >
                            <button type="button" className="btn btn-light">
                              Edit Plan
                            </button>
                          </Link>
                        </div>
                      </div>
                      <br></br>
                      <div className="row">
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => acceptPlan()}
                          >
                            Accept Plan
                          </button>
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => acceptPlan()}
                          >
                            Accept Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h2 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Last Week Water Tracker Report{" "}
                      </h2>
                      {typeof waterHistory != "string" ? (
                        waterHistory.map((day, index) => (
                          <div key={day.id}>
                            <p>Day-{index + 1}</p>
                            <div className="progress">
                              <div
                                className="progress-bar bg-color"
                                style={{
                                  width: `${Math.ceil(
                                    (day.dailyAmount / 3000) * 100
                                  )}%`,
                                }}
                              >
                                {Math.ceil((day.dailyAmount / 3000) * 100)}%
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center">
                          {" "}
                          <h3>{waterHistory}</h3>
                        </div>
                      )}

                      <br />

                      <h2 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Last Month Weight Tracker Report{" "}
                      </h2>
                      <div className="row">
                        {typeof weightHistory != "string" ? (
                          weightHistory.map((day, index) => (
                            <div key={day.id} className="col-sm-6">
                              <p className="m-b-10 f-w-600">
                                Week -{index + 1}
                              </p>
                              <h6 className="text-muted f-w-400">
                                {day.fields.traineeWeight} Kg
                              </h6>
                              <br></br>
                            </div>
                          ))
                        ) : (
                          <div className="text-center"> {weightHistory}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    </>
  );
};

export default TrainerClient;
