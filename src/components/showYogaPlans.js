import React, { Component } from "react"
import "../style/planStyle.css";
import { Alarm, LightningChargeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


class ShowYogaPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exList: [],
      };
  }


    async componentDidMount() {
      try {
        document.body.style.backgroundColor = "#4FBDBA"
        document.body.style.minHeight = "1200vh"
        document.body.style.minWidth = "100vw"
        const res = await fetch('http://localhost:8000/yogaplans/');
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
            to={{pathname:"/yogaExercises", state: item.name,}}  >
         <span>
          
          <div className="row">
          <span className="main2 col text-center mt-1">{item.name}</span>
          </div>
          <br/>
          
           
          <div style={{
               backgroundImage: `url(${item.image})`,
               backgroundSize:'cover',
               minWidth: "49vw",
               minHeight: "70vh",      
          }} className="card">
      

            <div className="row container-fluid" id="exDets">
           
            <span className="plans col text-white ms-5">
              <LightningChargeFill/> &nbsp; 
            {item.numberOfExercises} Eexercises</span>
            
            <span className="plans col text-white ms-5">
              <Alarm/> &nbsp; &nbsp; 
             {Math.floor(item.totalDuration / 60)}:{item.totalDuration - 
             (Math.floor(item.totalDuration / 60)) * 60}  minutes</span>
             </div>
            
            </div> 
              
            </span>
            </Link>
    
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
          <div className="col-md-6 col-sm-10 mx-auto p-0 mt-3">
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

export default ShowYogaPlans;