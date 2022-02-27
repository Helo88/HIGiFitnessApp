import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Homepage from "../components/Homepage";
import WorkoutExercises from "../components/WorkoutExercises";
import WorkoutPlanDetails from "../components/WorkoutPlanDetails";
import ShowYogaPlans from "../components/ShowYogaPlans";
import ShowWorkoutPlans from "../components/ShowWorkoutPlans";
import YogaExercises from "../components/YogaExercises";
import HealthyTips from "../components/healthyTips";
import Gym from "../components/Gym";
// import WeightTracker from "./components/weightTracker";
import UserForm from "../components/RegisterForm";
import SignIn from "../components/Login";
import FavPlans from "../components/FavPlans";
import YogaPlanDetails from "../components/YogaPlanDetails";
import StartWorkoutPlanExercise from "../components/StartWorkoutPlanExercise";
import StartYogaPlanExercise from "../components/StartYogaPlanExercise";
import TraineeProfile from "../components/TraineeProfile";
// import Comm from "./components/Community";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LoggedInRoute from "./components/LoggedInRoute";
import Water from "../components/Water";
import Check from "../components/check";
// import TrainerProfile from "./components/TrainerProfile";
// import EditTrainerProfile from "./components/EditTrainerProfile"
// import Reminder from './components/Reminder'
import { axiosInstance } from "../js/network";
import { Clothing } from "../components/Clothing";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./style/App.css";
import "./style/planStyle.css";
import Navbar from "../components/Navbar";
import WeightReport from "../components/WeightReport"
import WaterReport from "../components/WaterReport";

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
  const [workoutfavplan, Setworkoutfavplan] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`${workoutplansapi}`).then((res) => {
      SetworkoutPlans(res.data);
    });
  }, []);

  useEffect(() => {
    axiosInstance.get(`${yogaplansapi}`).then((res) => {
      SetyogaPlans(res.data);
    });
  }, []);

  useEffect(() => {
    axiosInstance.get(`${workoutexercisesapi}`).then((res) => {
      SetworkoutExercises(res.data);
    });
  }, []);
  useEffect(() => {
    axiosInstance.get(`${yogaexercisesapi}`).then((res) => {
      SetyogaExercises(res.data);
    });
  }, []);

  // useEffect(() => {
  //   axiosInstance.get("http://localhost:8000/workoutfavplan/").then((res) => {
  //     console.log(Number(JSON.parse(res.data.result)[0].pk))
  //   if(Number(JSON.parse(res.data.result)[0].pk)){
  //     Setworkoutfavplan(Number(JSON.parse(res.data.result)[0].pk));
  //         localStorage.setItem("workoutfavplanid",Number(JSON.parse(res.data.result)[0].pk))
  //   } else{
  //     Setworkoutfavplan(res.data.result);
  //   }
  //   });
  // });
  return (
    <>
      <Router>
        <Navbar />
        <Water />
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
          <Route path={"/check"} exact component={Check} />  
          <Route path={"/healthytips"} exact component={HealthyTips} />
          <Route path={"/trainee"} exact component={TraineeProfile} />
          <Route path={"/login"} exact component={SignIn} />
          <Route path={"/signup"} exact component={UserForm} />
          <Route path={"/gymslocations"} exact component={Gym} />
          <Route path={"/clothing"} exact component={Clothing} />
          {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
          <Route path={"/we"} exact component={WeightReport} />
          <Route path={"/water"} exact component={WaterReport} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;