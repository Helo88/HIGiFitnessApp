import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const WorkoutPlanDetails = (props) => {
  const { workoutExercises } = props;
  const location = useLocation();

  const renderItems = () => {
    const planDetails = workoutExercises.filter(
      (plan) => plan.name === location.state
    );
    return planDetails.map((plan) => (
      <div className="col mb-6  mx-auto mt-5 p-0 ">
        <div
          key={plan.name}
          className="list-group-item  justify-content-between align-items-center"
        >
          <span>
            <div className="planbg">
              <div className="container work">
                <div className="row">
                  <span className="main2 col text-center pt-3">
                    {plan.name} Plan
                  </span>
                </div>
                <div className="row">
                  <span className="main2 col text-center mt-1">
                    <br></br>
                    <span className="plans main2 col text-center mt-1">
                      {plan.description}
                    </span>
                    <br />
                    <br />
                    <img src={`${plan.gif}`}></img> <br />
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    ));
  };

  return (
    <main className="bg containercolor">
      <h1 className="f h1 d-flex justify-content-center mt-5">
        Exercise Details
      </h1>
      <br /> <br />
      <div className="container">
        <ul className="list-group list-group-flush">{renderItems()}</ul>
      </div>
    </main>
  );
};

export default WorkoutPlanDetails;
