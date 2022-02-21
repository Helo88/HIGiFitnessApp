import React from "react";
import { Alarm, LightningChargeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const ShowYogaPlans = (props) => {
  const { YogaPlans } = props;

  const handleClick = (e, id) => {
    if (
      parseInt(localStorage.getItem("yogafavplanid")) === false ||
      localStorage.getItem("yogafavplanid") === null
    ) {
      handleAddPlan(e, id);
    } else {
      handleDeletePlan(e, id);
    }
  };

  const handleAddPlan = (e, id) => {
    NotificationManager.success(
      "Yoga Plan has been added successfully to your favorite "
    );
    axios
      .put(
        "http://localhost:8000/addYogaPlan/",
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
  };

  const handleDeletePlan = (e, id) => {
    if (id === parseInt(localStorage.getItem("yogafavplanid"))) {
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
    } else {
      handleAddPlan(e, id);
    }
  };

  return (
    <main className="bg">
       
      <h1 className="f h1 d-flex justify-content-center mt-5">Yo<span className="text-info">ga</span>&nbsp;Plans</h1><br/>
      <div className="container containercolor">
        <br/><br/>
        <div className="row">
              {
              YogaPlans.map((plan) => (

                <div className="col mb-6  d-flex ms-3 ">
                <div key={plan.id} className="list-group-item  justify-content-between align-items-center">

                  <span>
                  <div className="row mt-2 shadow-sm">
                      <span className="main2 col text-center mt-3 mb-3 ">
                        <button className="btn shadow-lg" onClick={(e) => handleClick(e, plan.id)}>
                          {" "}
                          {plan.id ===
                          Number(localStorage.getItem("yogafavplanid")) ? (<i class="bi bi-star-fill"></i>) : (<i class="bi bi-star"></i>)}
                        </button>
                        <NotificationContainer />
                        {plan.name}
                        </span>
                    </div>
                    <br/>

                    <Link to={{ pathname: "/yogaexercises", state: plan.id }}>
                    <div style={{
                        backgroundImage: `url(${plan.image})`,
                        backgroundSize: 'cover',
                        minWidth: "40vw",
                        minHeight: "45vh",
                      }} className="card  shadow-lg">


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
                  <br/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <br/><br/>
    </main>
  );
};

export default ShowYogaPlans;
