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
  };

  render_reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item row">
              <div className="col-8">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
              </div>
              <div
                className="closeIcon btn btn-danger col-3"
                onClick={() => this.props.remove_Reminder(reminder.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="App_reminder">
        <img src={img} alt="reminder" />
        <div>
          <h2 className="reminder-title">What shoud I do !!</h2>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter what do you think...?"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />

        <DatePicker
          className="form-control"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => this.setState({ date: date })}
          showTimeSelect
          placeholderText="Enter Date"
          timeFormate="HH:mm"
          dateFormat="MMMM d,yyyy h:mm aa"
          timeCaption="time"
        />
        {this.render_reminders()}
        <div className="d-flex flex-column">
          <button
            className="btn btn-lg btn-block " 
            id="btn2"
            onClick={() => {
              this.props.add_Reminder(this.state.text, this.state.date);
              this.setState({ text: "", date: "" });
            }}
          >
            Add Task
          </button>
          <button
            className="clearReminder btn btn-danger btn-lg btn-block"
            onClick={() => this.props.clear_Reminder()}
          >
            Remove Tasks
          </button>
        </div>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch){
//     return{
//         add_Reminder : ()=> dispatch(add_Reminder())
//     }
// }
// function mapStateToProps(state){
//     return {
//         reminders : state
//     }
// }

export default connect(
  (state) => {
    return {
      reminders: state,
    };
  },
  { add_Reminder, remove_Reminder, clear_Reminder }
)(Reminder);
