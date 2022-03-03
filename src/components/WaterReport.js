import React, { useEffect, useState } from "react";
import { axiosInstance } from "../js/network/index";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import "../style/Reports.css";
import plugin from "chartjs-plugin-datalabels";

ChartJS.register(plugin, CategoryScale, LinearScale, BarElement);

const WaterReport = () => {
  const [waterRep, setWaterRep] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosInstance
      .get("http://127.0.0.1:8000/dailyWater/")
      .then((res) => {
        setWaterRep(res.data);
      })
      .catch((err) => console.log(err));
  };

  if (typeof waterRep != "string") {
    var data = {
      labels: waterRep.map((tr) => tr.created_at),
      datasets: [
        {
          label: "Date",
          data: waterRep.map((tr) => tr.dailyAmount),
          fontSize: "150px",
          backgroundColor: ["#35858B", "#AEFEFF"],
          hoverBackgroundColor: "#4FBDBA",
          borderColor: ["#4FBDBA"],
          borderWidth: 1,
        },
      ],
    };

    var options = {
      maintainAspectRatio: true,
      responsive: true,
      aspectRatio: 3,
      plugins: {
        datalabels: {
          display: true,
          color: "white",
          align: "end",
          anchor: "end",
          font: { size: "17" },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Date",
            color: "#AEFEFF",
            font: { size: "16" },
          },
          ticks: {
            major: {
              enabled: true,
            },
            color: () => "#FFFFFF",
            font: function () {
              return {
                weight: "normal",
                size: "15",
              };
            },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Amount of Water",
            color: "#AEFEFF",
            font: { size: "16" },
          },
          ticks: {
            major: {
              enabled: true,
            },
            color: () => "#FFFFFF",
            font: function () {
              return {
                weight: "normal",
                size: "15",
              };
            },
          },
        },
      },
    };
  } else {
    var data = waterRep;
  }
  return (
    <body id="bkg">
      <strong>
        <h1 className="col text-center mt-3 mb-3" id="title">
          Weekly Water Report
        </h1>
      </strong>
      <div className="container-fluid me-5 ms-5">
        {typeof waterRep != "string" ? (
          <Bar data={data} width={"1%"} options={options} />
        ) : (
          <div>{waterRep}</div>
        )}
      </div>
    </body>
  );
};

export default WaterReport;
