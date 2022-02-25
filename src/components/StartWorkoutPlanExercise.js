import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Swal from "sweetalert2";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../style/planStyle.css";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const StartWorkoutPlanExercise = (props) => {
  const { workoutExercises } = props;
  const location = useLocation();
  const history = useHistory();
  const [startexercise, setStartExercise] = useState([]);
  const [duration, setDuration] = useState(7);
  const [count, setCount] = useState(0);
  const slider1 = useRef();
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    setStartExercise(
      workoutExercises.filter((s) => location.planexercises.includes(s.name))
    );
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "0",
    autoplaySpeed: 7000,
    autoplay: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (currentSlide) {
      console.log(currentSlide);
      console.log(startexercise.length);
      setDuration(7);
      if (startexercise.length - 1 === currentSlide) {
        setTimeout(() => {
          Swal.fire({
            title: "Congratulations!",
            text: "Great Gob You Finish This Plan , Go On And Finsh Another One.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          history.push("/favplans");
        }, 6000);
      }
    },
  };
  const setTimer = () => {
    const count =
      duration > 0 &&
      setInterval(() => setDuration((prevCount) => prevCount - 1), 1000);
    setCount(count);
  };
  const clearTimer = () => {
    if (count) {
      clearInterval(count);
      setCount(0);
      return;
    }
  };
  const play = () => {
    slider1.current.slickPlay();
    setTimer();
  };
  const pause = () => {
    slider1.current.slickPause();
    clearTimer();
  };
  useEffect(() => {
    if (duration === 0) {
      setDuration(7);
    }
  }, [duration]);

  const exerciseTemplate = startexercise.map((exercise, idx) => {
    return (
      <div
        key={exercise.id}
      >
        <div className="slideWrapper">
          <span className="main2 col text-center mt-3 mb-3 ">
            {exercise.name}
          </span>
          <br></br>
          {
            <img
              className="exercisegif"
              src={exercise.gif}
              alt="exercise gif"
            />
          }
          <br></br>
          <span className="main2 col text-center mt-3 mb-3 ">
            {duration} seconds
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="text-info h3">
        <h3>Let's Go , Just Follow My Steps....</h3>
      </div>
      <Slider ref={(slider) => (slider1.current = slider)} {...settings}>
        {exerciseTemplate}
      </Slider>
      <div className="btnscontainer">
        <button className="btn shadow-lg btns" onClick={() => play()}>
          Play
        </button>
        <button className="btn shadow-lg btns" onClick={() => pause()}>
          Pause
        </button>
      </div>
    </>
  );
};

export default StartWorkoutPlanExercise;
