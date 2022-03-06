import React, { Component } from "react";
import {
  add_Reminder,
  remove_Reminder,
  clear_Reminder,
} from "../redux/actions";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from "../images/reminder.png";
import "../style/reminder.css";

class Reminder extends Component {
  state = {
    text: "",
    date: new Date(),
    err1:"",
    err2:""
  
  };

  render_reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder,index) => {
          return (
            <li key={reminder.id} className="list-group-item row my-2 col-11 mx-auto">
              <div className="col-8">
                <div >{reminder.text}</div>
                <div  className="dateTodo"> <i className="bi bi-clock"></i>{moment(new Date(reminder.date)).fromNow()}</div>
              </div>
              
                 <i id="closeIcon" onClick={() => this.props.remove_Reminder(reminder.id)}
                 title="remove task" className="bi bi-x"></i>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div id="bodyy" style={{paddingTop:"5em"}}>
      <div className="App_reminder">
        <img src={"/assets/images/fit1.png"} alt="reminder" />
        <div>
          <h2 className="reminder-title"><small>W</small>hat <small>sho</small>ud <small>I</small>  do <small>?!</small></h2>
        </div>
        <div className="d-flex">
          <div className ="col-11">
        <input
          className="form-control mt-5"
          id="rem"
          type="text"
          placeholder="Enter what do you think...?"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        {this.state.err1 ?
        <div className="text-danger mt-2 w-50 mx-5 px-5">{this.state.err1}</div>
        :
        <></>
  }
        <DatePicker
          className="form-control mt-5 mb-3 text-secondary"
          id="rem2"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => this.setState({ date: date })}
          showTimeSelect
          placeholderText="Enter Date"
          timeFormate="HH:mm"
          dateFormat="MMMM d,yyyy h:mm aa"
          timeCaption="time"
        />
        {this.state.err2 ?
        <div className="text-danger w-50 mx-5 px-5 mb-3">{this.state.err2}</div>
        :
        <></>
        }
        </div>
        <i id="plusIcon" 
        onClick={() => {
          if(this.state.text.length ==0){
              this.setState({"err1":"Text can't be empty"})
          }
          else if (this.state.date.length ==0){
              this.setState({"err2":"Date can't be empty"})
          }
          
          else{
          this.props.add_Reminder(this.state.text, this.state.date);
          this.setState({ text: "", date:"",err1:"",err2:""});
          }
        }}
        title="Add Todo" class="bi bi-patch-plus align-self-center fs-1"></i>
        
      </div>
        {this.render_reminders()}
        <div className="d-flex flex-column">
     
          <button
            className="clearReminder btn btn-outline-danger btn-lg btn-block mt-3"
            id="btnRem"
            onClick={() => {this.props.clear_Reminder()
              this.setState({ text: "", date:"" ,err1:"",err2:""});
            }}
          >
            Remove Tasks
          </button>
        </div>
      </div>
      </div>
    );
  }
}


export default connect(
  (state) => {
    return {
      reminders: state,
    };
  },
  { add_Reminder, remove_Reminder, clear_Reminder }
)(Reminder);
