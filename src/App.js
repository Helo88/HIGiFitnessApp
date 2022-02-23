import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.css";
import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm'
import Login from './components/Login'
import ShowPlans from './components/ShowPlans'
import Exercises from './components/exercises'
import ExDetails from "./components/ExDetails"
import ShowYogaPlans from './components/showYogaPlans'
import YogaExercises from './components/YogaExercises'
import YogaDetails from "./components/YogaDetails";
import HealthyTips from "./components/healthyTips";
import Navbar from "./components/Navbar";
import Comm from './components/Community'
import ProtectedRoute from './components/ProtectedRoute'
import LoggedInRoute from './components/LoggedInRoute'
import Gym from "./components/Gym"
import Water from "./components/Water"
import {Clothing} from "./components/Clothing"
import TrainerProfile from "./components/TrainerProfile"
import TraineeProfile from "./components/TraineeProfile"
import {axiosInstance} from './js/network/index';
import React, { useEffect, useState } from "react";

function App() {

  return (
    <div className="" style={{}}>
      {/* HELLO WORLD */}
         {/* <Water /> */}
        
      <Router>
        { <Navbar/>}
         <Switch>
            <ProtectedRoute path={"/"} exact component={Homepage}/>
            {/* <ProtectedRoute path={"/workoutplans"} exact component={ShowPlans}/>
            <ProtectedRoute path={"/exercises"}  exact component={Exercises}/>
            <ProtectedRoute path={"/exercises/details"}  exact component={ExDetails}/>
            <ProtectedRoute path={"/yogaplans"} exact component={ShowYogaPlans}/>
            <ProtectedRoute path={"/yogaExercises"}  exact component={YogaExercises}/>
            <ProtectedRoute path={"/yoga/details"}  exact component={YogaDetails}/>
            <ProtectedRoute path={"/healthytips"} exact component={HealthyTips}  /> */}
            <Route path={"/login"} exact component={Login}  />
            <LoggedInRoute path={"/comm/:id"} component={Comm}  />
            <Route path={"/gymslocations"} exact component={Gym}  />
            <Route path={"/shops"} exact component={Clothing}  />
            <Route path="/me"
            render={() =><TrainerProfile  /> }></Route>
            {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
           
          </Switch> 
        {/* <Footer /> */}
        </Router>
   
    </div>
  );
}

export default App;
