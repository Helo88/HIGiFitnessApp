import React, { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link } from "react-router-dom";
import { Alarm, LightningChargeFill } from "react-bootstrap-icons";
import { axiosInstance } from "../js/network";

const FavPlans = (props) => {
  const { WorkoutPlans, YogaPlans } = props;
  const [change, setChange] = useState(0);
  const [favYogaPlan, setfavYogaPlan] = useState([]);
  const [favWorkoutPlan, setfavWorkoutPlan] = useState([]);

  const handleDelWorkoutPlan = (e) => {
    localStorage.setItem("workoutPlan", "null");
    setChange((c) => c + 1);
    axiosInstance.get("http://localhost:8000/deleteworkoutplan/");
  };

  const handleDelYogaPlan = (e) => {
    localStorage.setItem("yogaPlan", "null");
    setChange((c) => c + 1);
    axiosInstance.get("http://localhost:8000/deleteyogaplan/");
  };
  useEffect(() => {
    axiosInstance
      .get("http://localhost:8000/updateTraineeFavPlansStatus/")
      .then((res) => {
        console.log(res);
        if (res.data.result === true) {
          NotificationManager.info("Your trainer has changed your plans");
        }
      })
      .then(() => {
        axiosInstance.put(
          "http://localhost:8000/updateTraineeFavPlansStatus/",
          {
            id: parseInt(localStorage.getItem("id")),
            editedstatus: false,
          }
        );
      });
    try {
      setfavWorkoutPlan(
        WorkoutPlans.filter(
          (e) => e.id === Number(localStorage.getItem("workoutPlan"))
        )
      );
    } catch {
      setfavWorkoutPlan(localStorage.getItem("workoutPlan"));
    }
    try {
      setfavYogaPlan(
        YogaPlans.filter(
          (e) => e.id === Number(localStorage.getItem("yogaPlan"))
        )
      );
    } catch {
      setfavYogaPlan(localStorage.getItem("yogaPlan"));
    }
  }, [localStorage.getItem("workoutPlan"), localStorage.getItem("yogaPlan")]);
  useEffect(() => {}, [change]);
  // useEffect(() => {

  // }, []);
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
                        onClick={(e) => handleDelWorkoutPlan(e)}
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
                        onClick={(e) => handleDelYogaPlan(e)}
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
      <NotificationContainer />
    </main>
  );
};

export default FavPlans;
