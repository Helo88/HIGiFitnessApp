import { useParams, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";



import "../style/clothing.css";

export const Clothing = () => {
  // let [apidata,setdata]=useState([])
  // useEffect(()=>{
  //  const url='http://127.0.0.1:8000/yogaexercises/'
  //   fetch(url).then((data)=>data.json()).then((data)=>{console.log(data);setdata(data)})
  // },[])


  return (
    // here do smth like <ul> apidata.map((ele)=><li key=ele.id > ele</li> </ul>)
    <>
      {/***************************** *first section ***********************************/}
      <div className="px-2 " id="clothingIntro">
        <div className="container pt-2 mt-5">
          <main id="clothingMain" className="">
            <h1 className="mb-5 text-center text-uppercase fw-bold ">
              First Time Workout Or Yoga ?!
            </h1>

            <div className="mx-auto p-1 text-center w-50" id="quote">
              <img
                style={{ width: "50px", height: "50px" }}
                id="idea"
                src="/assets/images/bulb.gif"
              />
              <hr className="w-25 mx-auto"></hr>

              <p>
                <i className="bi bi-quote px-1"></i>
                It's very important to have the right clothing to exercise in.
                if you throw an old T-shirt or sweats .It's not inspiring for
                your workout.
                <i className="bi bi-quote px-1"></i>
              </p>

              <span>Cheryl Tiegs</span>
              <hr className="w-25 mx-auto mb-1"></hr>
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
                  <i className="bi bi-lightbulb pe-3 "></i> It can prevent
                  injury{" "}
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
                  <i className="bi bi-lightbulb pe-3 text-light"></i> It can
                  boost confidence
                </li>
                <li>
                  <i className="bi bi-lightbulb pe-3 text-light"></i> It affects
                  your skin
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
            <div className="col-12 col-md-5">
              <div
                className="image-flip"
                onTouchStart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card" id="workout"></div>
                  </div>
                  <div className="backside w-100 h-100 ">
                    <div className="card w-100 h-100 ">
                      <div className="card-body text-center ">
                        <>
                          <div
                            id="carouselExampleDark"
                            className="carousel carousel-dark slide h-100"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div>
                            <div className="carousel-inner  h-100">
                              <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                              >
                                <img
                                  src="./assets/images/shirts.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
       
      </div> */}
                                <p className="caption">
                                  1 Choose a lightweight t-shirt or sweatshirt.
                                  Wear a breathable material like cotton or
                                  polyester. When you work out, you'll grow hot
                                  and sweaty, so you want to make sure that your
                                  clothing doesn't trap the heat. If possible,
                                  choose a top that is specifically designed for
                                  wicking sweat. Consider wearing a tank top or
                                  sports bra for a more breathable—if more
                                  revealing—outfit.
                                </p>
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src="./assets/images/pants.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        </div> */}
                                <p className="caption">
                                  2 Pick your bottoms. Wear something flexible,
                                  with an elastic waistband: gym shorts,
                                  sweatpants, track pants, or yoga pants. You
                                  should be able to perform a full range of leg
                                  workouts while you're wearing the bottoms. The
                                  bottoms that you wear also depend on the
                                  effect that you're going for: tight and
                                  skin-showing clothing can help you show off,
                                  and baggier, more flowing garments might help
                                  you blend in
                                </p>
                              </div>
                              <div className="carousel-item">
                                <img
                                  src="./assets/images/shoes.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        </div> */}
                                <p className="caption">
                                  3 Bring appropriate footwear. The shoes you
                                  wear will depend upon the sort of exercises
                                  that you're doing. If you plan to do any
                                  cardio, then bring shoes that will offer
                                  plenty of protection for your feet and legs.
                                  Keep in mind that a lot of gyms don't allow
                                  open-toed shoes.
                                </p>
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-0 offset-md-2 col-md-5 mt-0 mt-sm-4">
              <div
                className="image-flip"
                onTouchStart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card" id="yoga"></div>
                  </div>
                  <div className="backside w-100 h-100 ">
                    <div className="card w-100 h-100 ">
                      <div className="card-body text-center ">
                        <>
                          <div
                            id="carouselExampleDark"
                            className="carousel carousel-dark slide h-100"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div>
                            <div className="carousel-inner  h-100">
                              <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                              >
                                <img
                                  src="./assets/images/shirts.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
       
      </div> */}
                                <p className="caption">
                                  1 Choose a lightweight t-shirt or sweatshirt.
                                  Wear a breathable material like cotton or
                                  polyester. When you work out, you'll grow hot
                                  and sweaty, so you want to make sure that your
                                  clothing doesn't trap the heat. If possible,
                                  choose a top that is specifically designed for
                                  wicking sweat. Consider wearing a tank top or
                                  sports bra for a more breathable—if more
                                  revealing—outfit.
                                </p>
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src="./assets/images/pants.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        </div> */}
                                <p className="caption">
                                  2 Pick your bottoms. Wear something flexible,
                                  with an elastic waistband: gym shorts,
                                  sweatpants, track pants, or yoga pants. You
                                  should be able to perform a full range of leg
                                  workouts while you're wearing the bottoms. The
                                  bottoms that you wear also depend on the
                                  effect that you're going for: tight and
                                  skin-showing clothing can help you show off,
                                  and baggier, more flowing garments might help
                                  you blend in
                                </p>
                              </div>
                              <div className="carousel-item">
                                <img
                                  src="./assets/images/shoes.jpeg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        </div> */}
                                <p className="caption">
                                  3 Bring appropriate footwear. The shoes you
                                  wear will depend upon the sort of exercises
                                  that you're doing. If you plan to do any
                                  cardio, then bring shoes that will offer
                                  plenty of protection for your feet and legs.
                                  Keep in mind that a lot of gyms don't allow
                                  open-toed shoes.
                                </p>
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* **********************************trird section****************************************** */}
      <div id="map" className="row">
        <h1 className="col-12 col-md-7 mt-5 p-5">
          lets find the nearest shops to you !
        </h1>
       <div id="inside"className="col-12 mt-5 offset-0 offset-md-7 col-md-4" title="click me"></div>
      </div>
    </>
  );
};
