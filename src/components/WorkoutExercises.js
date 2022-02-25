import React from "react";
import myimg from "../images/fitness.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const WorkoutExercises = (props) => {
  const { WorkoutPlans } = props;
  const location = useLocation();
  const renderItems = () => {
    const planExercises = WorkoutPlans.filter(
      (plan) => plan.id === parseInt(location.state)
    );
    return planExercises.map((plan) => (
      <div className="col mb-6  mx-auto mt-5 p-0 ">
        <div
          key={plan.id}
          className="list-group-item  justify-content-between align-items-center"
        >
          <span>
            <div
              style={{
                backgroundImage: `url(${myimg})`,
              }}
              className="planbg"
            >
              <div className="container">
                <div className="row">
                  <span className="main2 col text-center pt-3">
                    {plan.name} Plan
                  </span>
                  <br />
                </div>
                <div className="row">
                  <span className="main2 col text-center mt-1">
                    Total Duration :{" "}
                    {Math.floor(plan.totalTimeOfExercises / 60)}:
                    {plan.totalTimeOfExercises -
                      Math.floor(plan.totalTimeOfExercises / 60) * 60}{" "}
                    minutes
                  </span>
                </div>
              </div>
            </div>
            {plan.exercise.map((ex) => (
              <div key={ex.id}>
                <Link to={{ pathname: "/workoutexercises/details", state: ex }}>
                  <span className="card" id="ex">
                    {ex}
                  </span>
                </Link>
              </div>
            ))}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <main className="bg containercolor">
      <h1 className="f h1 d-flex justify-content-center mt-5">Exercises</h1>
      <br />
      <div className="container">
        <br />
        <br />
        <ul className="list-group list-group-flush">{renderItems()}</ul>
      </div>
      <br />
      <br />
    </main>
  );
};

export default WorkoutExercises;
