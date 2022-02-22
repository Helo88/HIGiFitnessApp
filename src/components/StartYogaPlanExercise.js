import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../style/swiper.css";
import $ from "jquery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import fitness from "../images/fitness.jpg";
import home from "../images/home.jpg";
import yoga from "../images/yoga.jpg";

import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
const StartYogaPlanExercise = (props) => {
  const [state, setState] = useState({
    nav2: null,
  });
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav2: slider2.current,
    });
  }, []);
  const { yogaExercises } = props;
  const location = useLocation();
  const startexercise = yogaExercises.filter((s) =>
    location.planexercises.includes(s.name)
  );
  const SampleNextArrow=(props) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#4FBDBA" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow=(props) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#35858B" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    speed: 500,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
  };
  const play = () => {
    console.log(props);
    slider2.current.slickPlay();
  };
  const pause = () => {
    slider2.current.slickPause();
  };
  return (
    <main className="bg">
      <h3> Let's Go </h3>
      <div className="container containercolor">
        <Slider ref={(slider) => (slider2.current = slider)} {...settings} autoplaySpeed={5000} autoplay>
          {startexercise.map((exercise) => (
            <div key={exercise.id}>
              {console.log(exercise.duration)}
              <span>{exercise.name}</span>
              <span className="plans col text-white ms-5">
                {exercise.duration}
                seconds
              </span>
              <img src={exercise.image}></img>
            </div>
          ))}
          <div></div>
        </Slider>
        <button className="button" onClick={() => play()}>
          Play
        </button>
        <button className="button" onClick={() => pause()}>
          Pause
        </button>
      </div>
    </main>
  );
};

// {/* <main className="bg">
//   <div className="row">
//     <h1 className="f h1 d-flex justify-content-center mt-5">Exercises</h1>
//     <div className="col-md-6 col-sm-10 mx-auto p-0 mt-6">
//       <div className="card">
//       <ul className="list-group list-group-flush">
//           {startexercise.map((plan) => (
//         <div
//           key={plan.id}
//           className="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>
//             {plan.name}
//             <br />
//               <div
//                 style={{
//                   backgroundImage: `url(${plan.gif})`,
//                   backgroundSize: "cover",
//                   maxWidth: "100vh",
//                   minHeight: "30vh",
//                 }}
//                 className="card"
//               >
//                 <div className="row container-fluid" id="exDets">

//                   <span className="plans col text-white ms-5">
//                     {plan.duration}
//                     seconds
//                   </span>
//                 </div>
//               </div>

//           </span>
//         </div>
//       ))}
//       </ul>
//       </div>
//     </div>
//   </div>
// </main> */}

export default StartYogaPlanExercise;
