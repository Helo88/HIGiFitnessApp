import React, { Component } from "react"
import "../style/planStyle.css";
import myimg from "../images/fitness.jpg"
import { Link } from 'react-router-dom';

class Exercises extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state)
    this.state = {
      exList: []
      };
  }

    async componentDidMount() {
      try {
        document.body.style.backgroundColor = "#4FBDBA"
        document.body.style.minHeight = "130vh"
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
      
      const newItems = this.state.exList.filter(
        item => item.name === this.props.location.state);
      
      return newItems.map(item => (
          
        <div
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
           
          <span>
          
          <div style={{
               backgroundImage: `url(${myimg})`,
               backgroundSize:'cover',
               minWidth: "49vw",
               minHeight: "50vh", 
               opacity: 0.9
          }}> 

          <div className="container">
            <div className="row">
          <span className="main2 col text-center pt-3">{item.name} Plan</span><br/>
          </div>
          <div className="row">
          <span className="main2 col text-center mt-1">Total Duration : {Math.floor(item.totalTimeOfExercises / 60)}:{item.totalTimeOfExercises - 
             (Math.floor(item.totalTimeOfExercises / 60)) * 60}  minutes</span>
             </div>
            </div>
             </div> 
            {
                (item.exercise).map(ex => ( 
                <div key={ex.id}> 
                <Link to={{pathname:"/exercises/details", state: ex,}}>
                <span className="card" id="ex">{ex}</span>
                </Link>
                 </div>  ))
            }
            
              
            </span>
        </div>
      ));
    };

    render() {
      return (
        <main>
        <div className="row">
        <h1 className="f h1 d-flex justify-content-center mt-5">Exercises</h1>
          <div className="col-md-6 col-sm-10 mx-auto p-0 mt-6">
            <div className="card">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }

export default Exercises;