import React, { Component } from "react"
import "./planStyle.css";
import { Alarm, LightningChargeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


class ShowPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exList: [],
      };
  }


    async componentDidMount() {
      try {
        document.body.style.backgroundColor = "#4FBDBA"
        document.body.style.minHeight = "800vh"
        document.body.style.minWidth = "100vw"
        const res = await fetch('http://localhost:8000/workoutplans/');
        const exList = await res.json();
        this.setState({
          exList
        });
      } catch (e) {
        console.log(e);
    }
    }
  
    
    renderItems = () => {
      
      const newItems = this.state.exList
      
      return (
    
       newItems.map(item => (
          
        <div
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
            
            <Link 
            to={{pathname:"/exercises", state: item.name,}}  >
         <span>
          
          <span className="main2 mt-6">{item.name}</span>
          <br/>
          
           
          <div style={{
               backgroundImage: `url(${item.image})`,
               backgroundSize:'cover',
               minWidth: "49vw",
               minHeight: "50vh",      
          }} className="card">
      

            <div className="row container-fluid" id="exDets">
           
            <span className="plans col text-white ms-5">
              <LightningChargeFill/> &nbsp; 
            {item.numberOfEexercises} Eexercises</span>
            
            <span className="plans col text-white ms-5">
              <Alarm/> &nbsp; &nbsp; 
             {Math.floor(item.totalTimeOfExercises / 60)}:{item.totalTimeOfExercises - 
             (Math.floor(item.totalTimeOfExercises / 60)) * 60}  minutes</span>
             </div>
            
            </div> 
              
            </span>
            </Link>
            <br/>
        </div>
       

      ))
      
      )
    };

    
    render() {
      return (
        <main>
        <div className="row">
        <h1 className="f h1 d-flex justify-content-center mt-5">Workout Plans</h1>
        <br/>
          <div className="col-md-6 col-sm-10 mx-auto p-0 mt-6">
         <br/>
            <div className="cardd">
           <br/>
              <ul className="list-group ist-group-flush">
                {this.renderItems()}
              </ul>
            </div>
            
          </div>
        </div>
      </main>
      )
    }
  }

export default ShowPlans;