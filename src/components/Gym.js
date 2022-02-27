import React from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../js/network";
import "../style/Gym.css";

const Gym = () => {
  const handleMap = () => {
    var googleMapSrc = `http://maps.google.com/maps/search/nearst+gyms`;
    window.open(googleMapSrc, "_blank");
  };
  // const clo = () => {
  //   axiosInstance.put("http://127.0.0.1:8000/updateTraineeFavPlans/", {
  //     'id': 2,
  //     'yogaID': 12,
  //     'workoutID': 10,
  //   })
  // };

  return (
    <>
      <div className="px-2 " id="gymIntro">
        <div className="container pt-2 mt-5">
          <main id="clothingMain">
            <h1 className="mb-5 text-center text-uppercase fw-bold ">
              You Want To Subscribe To Gym ?!
            </h1>

            <div className="mx-auto p-1 text-center w-50" id="quotegym">
              <hr className="w-25 mx-auto"></hr>

              <p>
                <i className="bi bi-quote px-1"></i>
                Great Idea , Here Some Reasons Why You Shouldnot
                <i className="bi bi-quote px-1"></i>
              </p>

              <span>HIGE</span>
              <hr className="w-25 mx-auto mb-1"></hr>
            </div>
            <div id="gymbg">
              <div className="row">
                <ul
                  id="answers"
                  className="col-12 offset-0 offset-md-4 col-md-5 p-2 mt-4"
                >
                  <li>
                    <i className="bi bi-lightbulb pe-3 "></i> Waste Of Money
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3"></i>
                    Serious Injuries
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3"></i> Wasting Time In
                    Travel
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3 "></i> Restrictive and
                    not Comfortable
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3 text-light"></i> Gym
                    Guilt
                  </li>
                </ul>
              </div>
            </div>
          </main>
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
      <section className="fullsize-video-bg">
        <div className="inner">
          <div>
            <h1 id="title">Find Your Nearest Gym</h1>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleMap()}
            >
              Click Here
            </button>
          </div>
        </div>
        <div id="video-viewport">
          <video
            className="vplayer"
            width="1920"
            height="1280"
            autoPlay
            loop
            muted
          >
            <source
              src="https://assets.gymbox.com/videos/global/map.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default Gym;
