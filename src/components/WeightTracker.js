import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";
import axios from "axios";
import ReactDOM from "react-dom";
import "sweetalert2/dist/sweetalert2.all.min.js";
import "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

const WeightTracker = () => {
  const [weightList, setWeightList] = useState({
    id: 0,
    currentWeight: "",
    numOfLogin: 0,
  });

  async function setCurrentWeight() {
    const { value: traineeWeight } = await Swal.fire({
      title: "Enter your current weight",
      input: "text",
      inputLabel: "Current Weight",
      inputPlaceholder: "Enter your Current Weight",
      confirmButtonColor: "#35858B",
      confirmButtonText: "Check",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write your current weight!";
        }
      },
    });

    if (traineeWeight) {
      if (parseFloat(traineeWeight) > parseFloat(weightList.currentWeight)) {
        Swal.fire({
          title: "OoPs!",
          text: "You gain weight. You should take care of your healthy food. Go to healthy tips section.",
          icon: "error",
          showDenyButton: true,
          showConfirmButton: false,
          denyButtonText: `Close`,
        });
      } else {
        Swal.fire({
          title: "Great Job!",
          text:
            "Keep going. You lost " +
            (parseFloat(weightList.currentWeight) - parseFloat(traineeWeight)) +
            "Kg this Week.",
          icon: "success",
          showDenyButton: true,
          showConfirmButton: false,
          denyButtonColor: "#007500",
          denyButtonText: `Close`,
        });
      }

      setWeightList(() => {
        weightList.currentWeight = traineeWeight;
        weightList.numOfLogin += 1;
      });

      axiosInstance.put("http://127.0.0.1:8000/TraineeCurrentWeight/", {
        currentWeight: parseFloat(weightList.currentWeight),
        currentCounter: parseInt(weightList.numOfLogin),
      });

      axiosInstance.post("http://127.0.0.1:8000/TraineeWeightHistory/", {
        currentWeight: parseFloat(weightList.currentWeight),
        id: parseInt(weightList.id),
      });
    }
  }

  useEffect(() => {
    axiosInstance
      .get("http://127.0.0.1:8000/TraineeCurrentWeight/")
      .then((res) => {
        setWeightList(() => {
          weightList.id = res.data.id;
          weightList.currentWeight = res.data.weight;
          weightList.numOfLogin = res.data.counter;
        });
      })
      .then(() => {
        const d = new Date();
        let dbCounter = parseInt(weightList.numOfLogin);

        if (d.getDay() === 0 && dbCounter === 1) {
          setCurrentWeight();
        } else {
          setWeightList(() => {
            weightList.numOfLogin += 1;
          });

          axiosInstance.put("http://127.0.0.1:8000/TraineeCurrentWeight/", {
            currentWeight: parseFloat(weightList.currentWeight),
            currentCounter: parseInt(weightList.numOfLogin),
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <></>;
};
export default WeightTracker;
