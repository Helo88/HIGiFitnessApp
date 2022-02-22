import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSwiper } from 'swiper/react';

const StartWorkoutPlanExercise = (props) => {
  const { workoutExercises } = props;
  const location = useLocation();
  // const data = [{"guid":"j5Dc9Z","courses":[{"id":3,"name":"foo"}]},{"guid":"a5gdfS","courses":[{"id":1,"name":"bar"},{"id":3,"name":"foo"}]},{"guid":"jHab6i","courses":[{"id":7,"name":"foobar"}]}];
  // const courses = [1, 6, 3];

  // const r = data.filter(d => d.courses.every(c => courses.includes(c.id)));
  // console.log(workoutExercises)
  // console.log(location.planexercises)
  const startexercise = workoutExercises.filter((s) =>
    location.planexercises.includes(s.name)
  );
  const swiper = useSwiper();

  console.log(startexercise);
  // const s=location.planexercises.includes(d.name)
  // console.log(s)
  // workoutExercises.filter((e)=>{e.name===location.planexercises.filter((e)=>e)})

  return (
    <main className="bg">
      <div className="row">
        <h1 className="f h1 d-flex justify-content-center mt-5">Exercises</h1>
        <div className="col-md-6 col-sm-10 mx-auto p-0 mt-6">
          <div className="card">
            <ul className="list-group list-group-flush">

              {startexercise.map((plan) => (
                <div
                  key={plan.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {plan.name}
                    <br />
                    <div
                      style={{
                        backgroundImage: `url(${plan.gif})`,
                        
                      }}
                      className="card"
                    >
                      <div className="row container-fluid" id="exDets">
                        <span className="plans col text-white ms-5">
                          {plan.duration}
                          seconds
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StartWorkoutPlanExercise;
