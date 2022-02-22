import React from "react";
import { Alarm, LightningChargeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const ShowWorkoutPlans = (props) => {
  const { WorkoutPlans } = props;

  const handleClick = (e, id) => {
    if (
      parseInt(localStorage.getItem("workoutfavplanid")) === false ||
      localStorage.getItem("workoutfavplanid") === null
    ) {
      handleAddPlan(e, id);
    } else {
      handleDeletePlan(e, id);
    }
  };

  const handleAddPlan = (e, id) => {
    NotificationManager.success(
      "Workout Plan has been added successfully to your favorite "
    );
    axios
      .put(
        "http://localhost:8000/addWorkoutPlan/",
        { id: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
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
  };

  const handleDeletePlan = (e, id) => {
    if (id === parseInt(localStorage.getItem("workoutfavplanid"))) {
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
    } else {
      handleAddPlan(e, id);
    }
  };

<<<<<<< HEAD
  return (
    <main className="bg">
      <div className="row">
        <h1 className="f h1 d-flex justify-content-center mt-5">
          Work<span className="text-info">out</span>&nbsp;Plans
        </h1>
        <br />
        <div className="container containercolor">
          <br />
          <br />
          <div className="row">
            {WorkoutPlans.map((plan) => (
              <div className="col mb-6  d-flex ms-3 ">
                <div
                  key={plan.id}
                  className="list-group-item  justify-content-between align-items-center"
                >
                  <span>
                    <div className="row">
                      <span>
                        <div className="row mt-2 shadow-sm">
                          <span className="main2 col text-center mt-3 mb-3 ">
                            <button
                              className="btn shadow-lg"
                              onClick={(e) => handleClick(e, plan.id)}
                            >
                              {" "}
                              {plan.id ===
                              Number(
                                localStorage.getItem("workoutfavplanid")
                              ) ? (
                                <i class="bi bi-star-fill"></i>
                              ) : (
                                <i class="bi bi-star"></i>
                              )}
                            </button>

                            <NotificationContainer />
                            {plan.name}
                          </span>
                          <br />
                        </div>
                        <br />

                        <Link
                          to={{ pathname: "/workoutexercises", state: plan.id }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${plan.image})`,

                            }}
                            className="card  shadow-lg planbg"
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
                    </div>
                    <br />

                   
                  </span>

                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
      </div>
=======
  console.log(WorkoutPlans)

  return (
    <main className="bg">

      <h1 className="f h1 d-flex justify-content-center mt-5">Work<span className="text-info">out</span>&nbsp;Plans</h1><br />
      <div className="container containercolor">
        <br /><br />
        <div className="row">
          {
            WorkoutPlans.map((plan) => (

              <div className="col mb-6  d-flex ms-3 ">

                <div key={plan.id} className="list-group-item  justify-content-between align-items-center">

                  <span>
                    <div className="row mt-2 shadow-sm">
                      <span className="main2 col text-center mt-3 mb-3 ">
                        <button className="btn shadow-lg" onClick={(e) => handleClick(e, plan.id)} >
                          {" "}
                          {
                          plan.id === Number(localStorage.getItem("workoutfavplanid")) ?
                              (<i class="bi bi-star-fill"></i>) : (<i class="bi bi-star"></i>)
                          }
                        </button>

                        <NotificationContainer />
                        {plan.name}
                      </span><br />
                    </div>
                    <br />

                    <Link to={{ pathname: "/workoutexercises", state: plan.id }}>
                      <div style={{
                        backgroundImage: `url(${plan.image})`,
                        backgroundSize: 'cover',
                        minWidth: "40vw",
                        minHeight: "55vh",
                      }} className="card  shadow-lg">

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
              </div>
            ))
          }
        </div>
      </div>
      <br /><br />
>>>>>>> ca9fee9322209a82e1f185380839f0356b8f89af
    </main>
  );
};

export default ShowWorkoutPlans;
