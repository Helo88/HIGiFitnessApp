import React from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../js/network";
import "../style/Gym.css";

const Gym = () => {
  const handleMap = () => {
    var googleMapSrc = `http://maps.google.com/maps/search/nearst+gyms`;
    window.open(googleMapSrc, "_blank");
  };
  return (
    <>
      <div className="px-2 ">
        <div className="container  pt-2 mt-5">
          <main id="GymMain">
            <h1 className="mb-5 text-center text-uppercase fw-bold ">
              You Want To Subscribe To Gym ?!
            </h1>
          </main>
        </div>
        <div className="container pt-2 mt-5  gymIntro">
          <main id="clothingMain">
            <div className=" p-1 w-50" id="quotegym">
              <hr className="w-25 mx-auto"></hr>

              <p>
                <i className="bi bi-quote px-1"></i>
                Great Idea , Here Some Reasons Why You Shouldnot
                <i className="bi bi-quote px-1"></i>
              </p>
              <hr className="w-25 mx-auto mb-1"></hr>
            </div>
          </main>
        </div>

        <div className="container columns pt-2 mt-5 ma lis">
          <div class="card column list">
            <div class="card-body">
              <p class="card-text listtext">
                <i className="bi bi-lightbulb pe-3 "></i>
                Waste Of Money<br></br>
                <i className="bi bi-lightbulb pe-3 "></i>
                Serious Injuries<br></br>
                <i className="bi bi-lightbulb pe-3 "></i>
                Restrictive and not Comfortable<br></br>
                <i className="bi bi-lightbulb pe-3 "></i>
                Gym Guilt<br></br>
                <i className="bi bi-lightbulb pe-3 "></i>
                Wasting Time In Travel
              </p>
            </div>
          </div>
          <div class="card column ulbg"></div>
        </div>
        <div className="container columns pt-2 mt-5 ma lis">
          <div id="map" className="row">
            <h1 className="col-12 col-md-7 mt-5 p-5">
              Let's Find The Nearest Gyms To You!
            </h1>
            <div
              id="inside"
              className="col-12 mt-5 offset-0 offset-md-7 col-md-4"
              title="click me"
              onClick={() => handleMap()}
            >
              {" "}
              Click Me
            </div>
          </div>
        </div>
        <div className="container pt-2 mt-5 ma">
          <main id="clothingMain">
            <h1 className="mb-5 text-center  ">
              Here to Find Your Nearst Gyms If You Like To Subscribe To one ,
              But You Can Build Your Own Home Gym , Just By One Click...
              <br></br>
              <Link to="/signup">
                <button type="submit" className="btn" id="btn2">
                  Sign up
                </button>
              </Link>
            </h1>
          </main>
        </div>
      </div>
    </>
  );
};
export default Gym;
