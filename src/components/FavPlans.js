import React, { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alarm, LightningChargeFill } from "react-bootstrap-icons";

const FavPlans = (props) => {
  const { WorkoutPlans, YogaPlans } = props;

  let favYogaPlan = YogaPlans.filter(
    (e) => e.id === Number(localStorage.getItem("yogafavplanid"))
  );
  let favWorkoutPlan = WorkoutPlans.filter(
    (e) => e.id === Number(localStorage.getItem("workoutfavplanid"))
  );
  const [change, setChange] = useState(0);

  const handleDelWorkoutPlan = (e, id) => {
    NotificationManager.success(
      "Workout Plan has been removed successfully from your favorite "
    );
    localStorage.removeItem("workoutfavplanid");
    axios
      .get("http://localhost:8000/deleteworkoutplan/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        return axios
          .get("http://localhost:8000/workoutfavplan/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            localStorage.setItem(
              "workoutfavplanid",
              JSON.parse(res.data.result)[0].pk
            );
          });
      });
    setChange((c) => c + 1);
  };
  const handleDelYogaPlan = (e, id) => {
    NotificationManager.success(
      "Yoga Plan has been removed successfully from your favorite "
    );
    localStorage.removeItem("yogafavplanid");
    axios
      .get("http://localhost:8000/deleteyogaplan/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        return axios
          .get("http://localhost:8000/yogafavplan/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            localStorage.setItem(
              "yogafavplanid",
              JSON.parse(res.data.result)[0].pk
            );
          });
      });
    setChange((c) => c + 1);
  };
  useEffect(() => {}, [change]);
  return (
    <main className="bg">
      <br />
      <br />
      <div className="container containercolor padd">
        <h1 className="p h1 d-flex justify-content-center mt-5">
          Your Favorite <span className="text-info"> Workout </span>&nbsp; Plan
        </h1>
        <div className="col mb-6  d-flex ms-3 ">
          {favWorkoutPlan.length === 0 ? (
            <h3 className="tit">No Avaliable Workout Plans , Add One</h3>
          ) : (
            favWorkoutPlan.map((plan) => (
              <div
                key={plan.id}
                className="list-group-item  justify-content-between align-items-center"
              >
                <span>
                  <div className="row mt-2 shadow-sm ">
                    <span className="main2 col text-center mt-3 mb-3 ">
                      <button
                        className="btn shadow-lg"
                        onClick={(e) => handleDelWorkoutPlan(e, plan.id)}
                      >
                        <i class="bi bi-star-fill"></i>
                      </button>
                      {plan.name}
                      <br />
                      <Link
                        to={{ pathname: "/workoutexercises", state: plan.id }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${plan.image})`,
                          }}
                          className="card shadow-lg planbg"
                        >
                          <div className="row container-fluid" id="exDets">
                            <span className="plans col text-white ms-5">
                              <LightningChargeFill /> &nbsp;
                              {plan.numberOfEexercises} Exercises
                            </span>

                            <span className="plans col text-white ms-5">
                              <Alarm /> &nbsp; &nbsp;
                              {Math.floor(plan.totalTimeOfExercises / 60)}:
                              {plan.totalTimeOfExercises -
                                Math.floor(plan.totalTimeOfExercises / 60) *
                                  60}{" "}
                              minutes
                            </span>
                          </div>
                        </div>
                      </Link>
                    </span>
                    <br />
                  </div>
                </span>
                <Link
                  to={{
                    pathname: "/workoutexercises/start",
                    planexercises: plan.exercise,
                  }}
                >
                  <button className="btn" id="btns">
                    Start Exercise
                  </button>
                </Link>
                <br />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="container containercolor padd">
        <h1 className="p h1 d-flex justify-content-center mt-5">
          Your Favorite <span className="text-info"> Yoga </span>&nbsp; Plan
        </h1>
        <div className="col mb-6  d-flex ms-3 ">
          {favYogaPlan.length === 0 ? (
            <h3 className="tit">No Avaliable Yoga Plans , Add One</h3>
          ) : (
            favYogaPlan.map((plan) => (
              <div
                key={plan.id}
                className="list-group-item  justify-content-between align-items-center"
              >
                <span>
                  <div className="row mt-2 shadow-sm ">
                    <span className="main2 col text-center mt-3 mb-3 ">
                      <button
                        className="btn shadow-lg"
                        onClick={(e) => handleDelYogaPlan(e, plan.id)}
                      >
                        <i class="bi bi-star-fill"></i>
                      </button>
                      {plan.name}
                      <br />
                      <Link to={{ pathname: "/yogaexercises", state: plan.id }}>
                        <div
                          style={{
                            backgroundImage: `url(${plan.image})`,
                          }}
                          className="card shadow-lg planbg"
                        >
                          <div className="row container-fluid" id="exDets">
                            <span className="plans col text-white ms-5">
                              <LightningChargeFill /> &nbsp;
                              {plan.numberOfExercises} Exercises
                            </span>

                            <span className="plans col text-white ms-5">
                              <Alarm /> &nbsp; &nbsp;
                              {Math.floor(plan.totalDuration / 60)}:
                              {plan.totalDuration -
                                Math.floor(plan.totalDuration / 60) * 60}{" "}
                              minutes
                            </span>
                          </div>
                        </div>
                      </Link>
                    </span>
                    <br />
                  </div>
                </span>
                <Link
                  to={{
                    pathname: "/yogaexercises/start",
                    planexercises: plan.exercises,
                  }}
                >
                  <button className="btn" id="btns">
                    Start Exercise
                  </button>
                </Link>
                <br />
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default FavPlans;
