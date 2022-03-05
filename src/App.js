
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import Homepage from "./components/Homepage";
import WorkoutExercises from "./components/WorkoutExercises";
import WorkoutPlanDetails from "./components/WorkoutPlanDetails";
import ShowYogaPlans from "./components/ShowYogaPlans";
import ShowWorkoutPlans from "./components/ShowWorkoutPlans";
import YogaExercises from "./components/YogaExercises";
import HealthyTips from "./components/healthyTips";
import Gym from "./components/Gym";
import WeightTracker from "./components/WeightTracker";
import UserForm from "./components/RegisterForm";
import SignIn from "./components/Login";
import FavPlans from "./components/FavPlans";
import YogaPlanDetails from "./components/YogaPlanDetails";
import StartWorkoutPlanExercise from "./components/StartWorkoutPlanExercise";
import StartYogaPlanExercise from "./components/StartYogaPlanExercise";
import TraineeProfile from "./components/TraineeProfile";
import Loader from "./components/Loader";
import ResetPassword from "./components/ResetPassword";
import ForAllRoute from "./components/ForAllRoute";
import LoggedInRoute from "./components/LoggedInRoute";
import Water from "./components/Water";
import TrainerRoute from './components/TrainerRoute'
import TrainerProfile from "./components/TrainerProfile";
import TrainerClient from "./components/TrainerClient";
import Reminder from "./components/Reminder";
import { axiosInstance } from "./js/network";
import { Clothing } from "./components/Clothing";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./style/planStyle.css";
import Navbar from "./components/Navbar";
import WeightReport from "./components/WeightReport";
import WaterReport from "./components/WaterReport";
import ChooseWorkoutPlan from "./components/ChooseWorkoutPlan";
import ChooseYogaPlan from "./components/ChooseYogaPlans";
import Posts from "./components/Posts";
import ChooseTrainer from "./components/ChooseTrainer";
import JoinUs from "./components/JoinUs";
import Community from "./components/Community";
import ProtectedRoute from "./components/ProtectedRoute";
import "./style/App.css";
export const WeightContext = createContext();

export const LoginContext = createContext();
function App() {
  
  const [state, setState] = useState("start");
  const [weight, setWeight] = useState(null);
  const workoutplansapi = "http://localhost:8000/workoutplans/";
  const yogaplansapi = "http://localhost:8000/yogaplans/";
  const workoutexercisesapi = "http://localhost:8000/workoutexersices/";
  const yogaexercisesapi = "http://localhost:8000/yogaexercises/";

  const [yogaPlans, SetyogaPlans] = useState([]);
  const [workoutPlans, SetworkoutPlans] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [workoutExercises, SetworkoutExercises] = useState([]);
  const [yogaExercises, SetyogaExercises] = useState([]);

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
  useEffect((    ) => {
    axiosInstance.get(`${yogaexercisesapi}`).then((res) => {
      SetyogaExercises(res.data);
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <WeightContext.Provider value={{weight,setWeight}}>
    <>
      {isLoading === true ? (
        <Loader />
      ) : (
        <>
          <Router>
            <Navbar />
            {weight===true?
            <WeightTracker />
            :null}
            <Water />
            <Switch>
              <Route path={"/"} exact component={Homepage} />
              <ForAllRoute
                exact
                path="/workoutplans"
                component={() => <ShowWorkoutPlans WorkoutPlans={workoutPlans} />}
              ></ForAllRoute>
              <ForAllRoute
                exact
                path="/yogaplans"
                component={() => <ShowYogaPlans YogaPlans={yogaPlans} />}
              ></ForAllRoute>
              <LoggedInRoute
                exact
                path="/favplans"
                component={() => (
                  <FavPlans YogaPlans={yogaPlans} WorkoutPlans={workoutPlans} />
                )}
              ></LoggedInRoute>
              <ForAllRoute
                exact
                path="/workoutexercises"
                component={() => <WorkoutExercises WorkoutPlans={workoutPlans} />}
              ></ForAllRoute>
              <ForAllRoute
                exact
                path="/yogaexercises"
                component={() => <YogaExercises YogaPlans={yogaPlans} />}
              ></ForAllRoute>
              <ForAllRoute
                exact
                path="/workoutexercises/details"
                component={() => (
                  <WorkoutPlanDetails workoutExercises={workoutExercises} />
                )}
              ></ForAllRoute>
              <ForAllRoute
                exact
                path="/yogaexercises/details"
                component={() => <YogaPlanDetails yogaExercises={yogaExercises} />}
              ></ForAllRoute>
              <LoggedInRoute
                exact
                path="/workoutexercises/start"
                component={() => (
                  <StartWorkoutPlanExercise
                    workoutExercises={workoutExercises}
                  />
                )}
              ></LoggedInRoute>
              <LoggedInRoute
                exact
                path="/yogaexercises/start"
                component={() => (
                  <StartYogaPlanExercise yogaExercises={yogaExercises} />
                )}
              ></LoggedInRoute>
              <LoggedInRoute
                exact
                path="/trainee"
                component={() => (
                  <TraineeProfile
                    YogaPlans={yogaPlans}
                    WorkoutPlans={workoutPlans}
                  />
                )}
              ></LoggedInRoute>
              <TrainerRoute
                exact
                path="/chooseworkoutplan"
                component={() => <ChooseWorkoutPlan WorkoutPlans={workoutPlans} />}
              ></TrainerRoute>
              <TrainerRoute
                exact
                path="/chooseyogaplan"
                component={() => <ChooseYogaPlan YogaPlans={yogaPlans} />}
              ></TrainerRoute>
              <LoggedInRoute path={"/taskmanagar"} exact component={Reminder} />
              <Route path={"/healthytips"} exact component={HealthyTips} />
              <TrainerRoute path={"/TraineeInfo"} exact component={TrainerClient} />
              <LoggedInRoute path={"/choosetrainer"} exact component={ChooseTrainer} />
              <Route path={"/joinus"} exact component={JoinUs} />
              <TrainerRoute path={"/trainer"} exact component={TrainerProfile} />
              <ProtectedRoute path={"/login"} exact component={SignIn} />
              <ProtectedRoute path={"/signup"} exact component={UserForm} />
              <Route path={"/gymslocations"} exact component={Gym} />
              <Route path={"/clothing"} exact component={Clothing} />
              <LoggedInRoute path={"/we"} exact component={WeightReport} />
              <LoggedInRoute path={"/water"} exact component={WaterReport} />
              <ForAllRoute path={"/posts"} exact component={Posts} />
              <ForAllRoute path={"/comm/:id"} exact component={Community} />
              <Route path={"/rest-auth/password/reset/confirm/:uid/:token"}exact component={ResetPassword}/>
            </Switch>
            {/* <Footer /> */}
          </Router>
        </>
      )}
    </>
    </WeightContext.Provider>
  );
}

export default App;