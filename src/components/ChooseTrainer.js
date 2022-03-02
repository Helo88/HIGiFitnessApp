import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const ChooseTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("getTrainers/")
      .then((res) => {
        setTrainers(res.data.trainers);

        return res;
      })
      .then((res) => {
        console.log(res.data.trainers);
      })
      .then((res) => {
        console.log(
          "------------------------------------------------------------------"
        );
        console.log(
          "------------------------------------------------------------------"
        );
      });
  }, []);
  const chooseTrainer = (id) => {
    axiosInstance.put("getTrainers/", { id: id });
  };
  return (
    <>
      <h1 className="f h1 d-flex justify-content-center mt-5">
        Choose Your <span className="text-info">Trai</span>ner&nbsp;
      </h1>

      <ul class="list-group list-group-flush">
        {trainers.map((trainer, index) => (
          <div className="text-center mt-3" key={trainer.id}>
            <span id="uname">{trainer.username}</span>
            <br></br>
            <br />
            <button
              className="btn col-md-1"
              id="btnn1"
              onClick={() => chooseTrainer(trainer.id)}
            >
              Choose
            </button>
            <br />
            <hr className="col-md-4 d-flex align-content-center" id="linee" />
            <NotificationContainer />
          </div>
        ))}
      </ul>
    </>
  );
};
export default ChooseTrainer;
