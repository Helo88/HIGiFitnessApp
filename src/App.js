import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.css";
import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm'
import ShowPlans from './plans/ShowPlans'
import Exercises from './plans/exercises'
import ExDetails from "./plans/ExDetails"
import ShowYogaPlans from './plans/showYogaPlans'
import YogaExercises from './plans/YogaExercises'
import YogaDetails from "./plans/YogaDetails";
import { useState } from "react";

function App() {
  const [state, setState] = useState('start')
  return (
    <div className="" style={{}}>
      {/* HELLO WORLD */}
      <Router>
        {/* <NavBar/> */}
         <Switch>
            <Route path={"/"} exact component={ShowPlans}/>
            <Route path={"/exercises"}  exact component={Exercises}/>
            <Route path={"/exercises/details"}  exact component={ExDetails}/>
            <Route path={"/yoga"} exact component={ShowYogaPlans}/>
            <Route path={"/yogaExercises"}  exact component={YogaExercises}/>
            <Route path={"/yoga/details"}  exact component={YogaDetails}/>
            {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
           
          </Switch> 
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
