import { useParams, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../style/clothing.css";

export const Clothing = () => {
  return (
    <>
      {/***************************** *first section ***********************************/}
      <div className="px-2 " id="clothingIntro">
        <div className="container pt-2 mt-5">
          <main id="clothingMain" className="">
            <h1 className="mb-5 text-center text-uppercase fw-bold ">
              First Time Workout Or Yoga ?!
            </h1>
            <div className="w-50 mx-auto p-3 text-center" id="quote">
              <hr className="w-25 mx-auto"></hr>
              <p>
                <i className="bi bi-quote px-1"></i>
                It's very important to have the right clothing to exercise in.
                if you throw an old T-shirt or sweats .It's not inspiring for
                your workout.
                <i className="bi bi-quote px-1"></i>
              </p>
              <span>Cheryl Tiegs</span>
              <hr className="w-25 mx-auto"></hr>
            </div>
            <div className="row " id="questionSec">
              <div id="question" className="col-12 col-md-3">
                <div id="qBody" className="text-center p-3 text-light">
                  why what you wear while exercising really matters ?
                </div>
              </div>
              <ul
                id="answers"
                className="col-12 offset-0 offset-md-4 col-md-5 p-2 mt-4"
              >
                <li>
                  <i className="bi bi-lightbulb pe-3 "></i> It can prevent injury{" "}
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3"></i> 
                  You won’t feel restricted{" "}
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3"></i> It regulates and
                  controls body temperature{" "}
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3 "></i> It can improve
                  performance{" "}
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3 text-light"></i> It can boost
                  confidence
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3 text-light"></i> It affects your skin
                </li>
              </ul>
            </div>
          </main>
          {/* Quote */}
          {/* Advices */}
          {/* sections */}
          {/* find  */}
        </div>
      </div>
      <div className="wave"></div>

      {/* ***********************************second sec********************************************** */}
      <div className="px-2 " id="clothingDetails">
        <div className="container">
          <h2 className="text-center mb-5">What do you need to start ?</h2>.
          <div className="row">
            <div className="col-12 col-md-5" id="yoga"></div>
            <div
              className="col-12 offset-0 offset-md-2 col-md-5 mt-0 mt-sm-4"
              id="workout"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};