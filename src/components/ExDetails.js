import React, { Component } from "react"
import "../style/planStyle.css";


class ExDetails extends Component {
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
        const res = await fetch('http://localhost:8000/workoutexersices/');
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
          

          <span className="main">{item.name}</span><br></br>
          <span className="plans">{item.duration} seconds</span>
          <span className="plans">{item.description}</span>
           <img src={`${item.gif}`} className="gif" ></img> <br/><br/>
            <button className="btn" id="btns">Start</button>

              
            </span>
        </div>
      ));
    };

    render() {
      return (
        <main>
        <div className="row">
        <h1 className="f h1 mt-5 d-flex justify-content-center">Exercise Details</h1>
        <br/> <br/>
          <div className="col-md-6 col-sm-10 mx-auto mt-5 p-0">
            <div className="card p-3">         
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

export default ExDetails;