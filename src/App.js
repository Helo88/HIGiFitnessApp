import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactNotifications from 'react-notifications-component';
import "./style/App.css";
import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm'
import ShowWorkoutPlans from "./components/ShowWorkoutPlans";
import Exercises from './components/exercises'
import ExDetails from "./components/ExDetails"
import ShowYogaPlans from "./components/ShowYogaPlans";
import YogaExercises from './components/YogaExercises'
import YogaDetails from "./components/YogaDetails";
import HealthyTips from "./components/healthyTips";
import Gym from "./components/Gym";
import WeightTracker from "./components/weightTracker";
import SignIn from "./components/login";
import Navbar from "./components/Navbar";


function App() {
  const [state, setState] = useState('start')

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
        {<WeightTracker />}
        {<Navbar />}
        <Switch>
          <Route path={"/"} exact component={Homepage} />
          
          <Route exact path="/workoutplans" render={() => <ShowWorkoutPlans WorkoutPlans={workoutPlans} />}/>
          <Route exact path="/yogaplans" render={() => <ShowYogaPlans YogaPlans={yogaPlans} />}/> 
          <Route path={"/exercises"} exact component={Exercises} />
          <Route path={"/exercises/details"} exact component={ExDetails} />
      
          <Route path={"/yogaExercises"} exact component={YogaExercises} />
          <Route path={"/yoga/details"} exact component={YogaDetails} />

          <Route path={"/healthytips"} exact component={HealthyTips} />
          <Route path={"/gyms"} exact component={Gym} />
          <Route path={"/WeightTracker"} exact component={WeightTracker} />
          <Route path={"/login"} exact component={SignIn} />


          {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}

        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;