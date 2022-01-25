import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Clothing } from "./components/clothing";
import "./style/App.css";

function App() {
  return (
    <div className="" style={{}}>

      <Router>
        {/* <NavBar/> */}
        <Switch>
            <Route path={"/"} exact component={Clothing}  />
            {/* <Route   exact component={}/>
            <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
           
          </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
