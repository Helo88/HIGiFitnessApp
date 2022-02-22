import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Homepage from "./components/Homepage";
// import RegisterForm from "./components/RegisterForm";
import WorkoutExercises from "./components/WorkoutExercises";
import WorkoutPlanDetails from "./components/WorkoutPlanDetails";
import ShowYogaPlans from "./components/ShowYogaPlans";
import ShowWorkoutPlans from "./components/ShowWorkoutPlans";
import YogaExercises from "./components/YogaExercises";
import HealthyTips from "./components/healthyTips";
import Navbar from "./components/Navbar";
import Gym from "./components/Gym";
import SignIn from "./components/Login";
import axios from "axios";
import FavPlans from "./components/FavPlans";
import YogaPlanDetails from "./components/YogaPlanDetails";
import StartWorkoutPlanExercise from "./components/StartWorkoutPlanExercise";
import StartYogaPlanExercise from "./components/StartYogaPlanExercise";

import "./style/App.css";
import "./style/planStyle.css";

function App() {
  const [state, setState] = useState("start");

  const workoutplansapi = "http://localhost:8000/workoutplans/";
  const yogaplansapi = "http://localhost:8000/yogaplans/";
  const workoutexercisesapi = "http://localhost:8000/workoutexersices/";
  const yogaexercisesapi = "http://localhost:8000/yogaexercises/";

  const [yogaPlans, SetyogaPlans] = useState([]);
  const [workoutPlans, SetworkoutPlans] = useState([]);
  const [workoutExercises, SetworkoutExercises] = useState([]);
  const [yogaExercises, SetyogaExercises] = useState([]);

  useEffect(() => {
    axios.get(`${workoutplansapi}`).then((res) => {
      SetworkoutPlans(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${yogaplansapi}`).then((res) => {
      SetyogaPlans(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${workoutexercisesapi}`).then((res) => {
      SetworkoutExercises(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${yogaexercisesapi}`).then((res) => {
      SetyogaExercises(res.data);
    });
  }, []);
  return (
    <>
      <Router>
        {<Navbar />}
        <Switch>
          <Route path={"/"} exact component={Homepage} />
          <Route
            exact
            path="/workoutplans"
            render={() => <ShowWorkoutPlans WorkoutPlans={workoutPlans} />}
          ></Route>
          <Route
            exact
            path="/yogaplans"
            render={() => <ShowYogaPlans YogaPlans={yogaPlans} />}
          ></Route>
          <Route
            exact
            path="/favplans"
            render={() => (
              <FavPlans YogaPlans={yogaPlans} WorkoutPlans={workoutPlans} />
            )}
          ></Route>
          <Route
            exact
            path="/workoutexercises"
            render={() => <WorkoutExercises WorkoutPlans={workoutPlans} />}
          ></Route>
          <Route
            exact
            path="/yogaexercises"
            render={() => <YogaExercises YogaPlans={yogaPlans} />}
          ></Route>
          <Route
            exact
            path="/workoutexercises/details"
            render={() => (
              <WorkoutPlanDetails workoutExercises={workoutExercises} />
            )}
          ></Route>
          <Route
            exact
            path="/yogaexercises/details"
            render={() => <YogaPlanDetails yogaExercises={yogaExercises} />}
          ></Route>
          <Route
            exact
            path="/workoutexercises/start"
            render={() => (
              <StartWorkoutPlanExercise workoutExercises={workoutExercises} />
            )}
          ></Route>
          <Route
            exact
            path="/yogaexercises/start"
            render={() => (
              <StartYogaPlanExercise yogaExercises={yogaExercises} />
            )}
          ></Route>
          <Route path={"/healthytips"} exact component={HealthyTips} />
          <Route path={"/login"} exact component={SignIn} />
          <Route path={"/gymslocations"} exact component={Gym} />
          {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
