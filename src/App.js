
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactNotifications from "react-notifications-component";
import "./style/App.css";
import "./style/Gym.css";
import Homepage from "./components/Homepage";
import RegisterForm from "./components/RegisterForm";
import ShowWorkoutPlans from "./components/ShowWorkoutPlans";
import Exercises from "./components/exercises";
import ExDetails from "./components/ExDetails";
import ShowYogaPlans from "./components/ShowYogaPlans";
import YogaExercises from "./components/YogaExercises";
import YogaDetails from "./components/YogaDetails";
import HealthyTips from "./components/healthyTips";
import Gym from "./components/Gym";
import WeightTracker from "./components/weightTracker";
import SignIn from "./components/Login";
import TraineeProfile from "./components/traineeProfile";
import Comm from "./components/Community";
import ProtectedRoute from "./components/ProtectedRoute";
import LoggedInRoute from "./components/LoggedInRoute";
import Water from "./components/Water";
import Check from "./components/check";
import TrainerProfile from "./components/TrainerProfile";
import EditTrainerProfile from "./components/EditTrainerProfile"
import Navbar from "./components/Navbar";


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
    <div className="" style={{}}>
      {/* HELLO WORLD */}
      <Router>
        {<Navbar />}
        <Switch>
          <ProtectedRoute path={"/"} exact component={Homepage} />
          <ProtectedRoute
            exact
            path="/workoutplans"
            render={() => <ShowWorkoutPlans WorkoutPlans={workoutPlans} />}
          />
          <ProtectedRoute path={"/exercises"} exact component={Exercises} />
          <ProtectedRoute
            path={"/exercises/details"}
            exact
            component={ExDetails}
          />
          <ProtectedRoute
            exact
            path="/yogaplans"
            render={() => <ShowYogaPlans YogaPlans={yogaPlans} />}
          />
          <ProtectedRoute
            path={"/yogaExercises"}
            exact
            component={YogaExercises}
          />
          <ProtectedRoute
            path={"/yoga/details"}
            exact
            component={YogaDetails}
          />
          <ProtectedRoute path={"/healthytips"} exact component={HealthyTips} />
          <Route path={"/login"} exact component={SignIn} />
          <LoggedInRoute path={"/comm"} component={Comm} />
          <Route path={"/gyms"} exact component={Gym} />
          {/* <Route path={"/check"} exact component={Check} />  */}
          <Route path={"/WeightTracker"} exact component={WeightTracker} />
          <Route path={"/editTrainer"} exact component={EditTrainerProfile} />
          <Route path="/me"
            render={() => <TrainerProfile  />}></Route>

          {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} />

            {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
