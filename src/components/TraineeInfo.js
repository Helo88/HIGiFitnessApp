import React from 'react';
import { useState, useEffect } from "react";
import { axiosInstance } from "../js/network/index";

const Traineeinfo = (props) => {
    const { WorkoutPlans, YogaPlans } = props;
    const [favYogaPlan, setfavYogaPlan] = useState([]);
    const [favWorkoutPlan, setfavWorkoutPlan] = useState([]);
  
    useEffect(() => {

        axiosInstance
          .get("http://127.0.0.1:8000/traineeInfo/6")
          .then((res) => {
            console.log(res.data.workout);
            console.log("yoga")
            console.log(res.data.yoga);
            console.log(res.data.waterHistory);
            console.log(res.data.weightHistory);
            try {
                setfavWorkoutPlan(
                  WorkoutPlans.filter(
                    (e) => e.id === Number(JSON.parse(res.data.workout)[0].pk)
                    )
                    );
                  } catch {
                    setfavWorkoutPlan(res.data.workout);
                  }
            })
            .then((res) => {
                console.log(res.data.yoga);
                try {
                    setfavYogaPlan(
                      WorkoutPlans.filter(
                        (e) => e.id === Number(JSON.parse(res.data.yoga)[0].pk)
                        )
                        );
                      } catch {
                        setfavYogaPlan(res.data.yoga);
                      }
                })
           })
    return (
        <div>
            {favWorkoutPlan.map((plan) => (
              <div
                key={plan.id}
                className="list-group-item  justify-content-between align-items-center"
              >
                <span>
                  <div className="row mt-2 shadow-sm ">
                    <span className="main2 col text-center mt-3 mb-3 ">
                        {plan.name}

                    </span>
                    <br />
                  </div>
                </span>

                <br />
              </div>
            ))
}
{favYogaPlan.map((plan) => (
              <div
                key={plan.id}
                className="list-group-item  justify-content-between align-items-center"
              >
                <span>
                  <div className="row mt-2 shadow-sm ">
                    <span className="main2 col text-center mt-3 mb-3 ">
                        {plan.name}

                    </span>
                    <br />
                  </div>
                </span>

                <br />
              </div>
            ))
}
        </div>
    );
}

export default Traineeinfo;
