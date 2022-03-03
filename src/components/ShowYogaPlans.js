import React, { useEffect, useState } from "react";
import { Alarm, LightningChargeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { axiosInstance } from "../js/network";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Loader from "./Loader";

const ShowYogaPlans = (props) => {
  const { YogaPlans } = props;
  const [change, setChange] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const handleClick = (e, id) => {
    if (parseInt(localStorage.getItem("yogaPlan")) === false) {
      handleAddPlan(e, id);
      setChange((c) => c + 1);
    } else {
      handleDeletePlan(e, id);
      setChange((c) => c + 1);
    }
  };

  const handleAddPlan = (e, id) => {
    NotificationManager.success(
      "Yoga Plan has been added successfully to your favorite "
    );
    localStorage.setItem("yogaPlan", id);
    axiosInstance.put("http://localhost:8000/addYogaPlan/", { id: id });
  };

  const handleDeletePlan = (e, id) => {
    if (id === parseInt(localStorage.getItem("yogaPlan"))) {
      NotificationManager.success(
        "Yoga Plan has been removed successfully from your favorite "
      );
      localStorage.setItem("yogaPlan", "null");
      axiosInstance.get("http://localhost:8000/deleteyogaplan/");
    } else {
      handleAddPlan(e, id);
    }
  };
  useEffect(() => {}, [change]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      {isLoading === true ? (
        <Loader />
      ) : (
        <main className="bg">
          <h1 className="f h1 d-flex justify-content-center mt-5">
            Yo<span className="text-info">ga</span>&nbsp;Plans
          </h1>
          <div className="container containercolor">
            <br />
            <br />
            <div className="row">
              {YogaPlans.map((plan) => (
                <div className="col mb-6  d-flex ms-3 ">
                  <div
                    key={plan.id}
                    className="list-group-item  justify-content-between align-items-center"
                  >
                    <span>
                      <div className="row mt-2 shadow-sm ">
                        <span className="main2 col text-center mt-3 mb-3 ">
                          <button
                            className="btn shadow-lg"
                            onClick={(e) => handleClick(e, plan.id)}
                          >
                            {" "}
                            {plan.id ===
                            Number(localStorage.getItem("yogaPlan")) ? (
                              <i className="bi bi-star-fill"></i>
                            ) : (
                              <i className="bi bi-star"></i>
                            )}
                          </button>
                          <NotificationContainer />
                          {plan.name}
                        </span>
                      </div>
                      <br />

                      <Link to={{ pathname: "/yogaexercises", state: plan.id }}>
                        <div
                          style={{
                            backgroundImage: `url(${plan.image})`,
                          }}
                          className="card  shadow-lg planbg"
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
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
        </main>
      )}
    </>
  );
};

export default ShowYogaPlans;
