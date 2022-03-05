import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import { axiosInstance } from "../js/network/index";

const Water = () => {
  const [count, setCount] = useState({ currentAmount: 0 });
  const [counter, setCounter] = useState(false);
  var d = new Date();
  let date = d.getHours() + ":" + d.getMinutes();
  const waterAmount = 3000;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  function getData(){
    axiosInstance
      .get("http://127.0.0.1:8000/water/", {})
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        setCount({ currentAmount: data.result });
        console.log(count.currentAmount);
        if (
          date === "9:0" ||
          date === "12:0" ||
          date === "15:0" ||
          date === "18:0" ||
          date === "21:0" ||
          date === "24:0" ||
          date === "4:17" ||
          date === "16:28" ||
          date === "16:43"
        ) {
          if (data.result < 3000 && counter == false) {
            setCounter(true);
            
            console.log("counter : " + counter);
            swalWithBootstrapButtons
              .fire({
                title: "Did you drink water ?",
                text: "Confirm or Dismiss!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes,I did it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire("Good Job!", "success");

                  axiosInstance.put(
                    `http://127.0.0.1:8000/water/`,
                    { count: count.currentAmount + 500 },
                    {}
                  );
                  Swal.fire({
                    title: `Your current amount of water ${count.currentAmount + 500
                      } Mliter from daily amount 3000 Mliter`,
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });

                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire(
                    "Cancelled",
                    "You have to drink some water :)",
                    "error"
                  );
                }
              });
          } else {
            if (counter == false) {
              setCounter(true);
              Swal.fire({
                title: "Good Job , Keep in going, You have reached the goal",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          }
        } else {
          setCounter(false);
          console.log("counter : " + counter);
        }

      });
  }
  useEffect(() => {
    console.log(counter);
    if (
      date === "9:0" ||
      date === "12:0" ||
      date === "15:0" ||
      date === "18:0" ||
      date === "21:0" ||
      date === "24:0" ||
      date === "16:28" ||
      date === "1:39" ||
      date === "16:43" &&
      counter===false
    ){
      getData()
    }
    else{
      setCounter(false);
    }


  }, []);
  return <div>{/* {count} */}</div>;
};

export default Water;
