import React, { Component } from 'react';
import StatusComp from "./Components/StatusComp.js";
import Dropdown from './Components/Dropdown.js';
import ReasonComp from './Components/ReasonComp.js';
import AuthorComp from './Components/AuthorComp.js';
import ScheduleComp from './Components/ScheduleComp.js';
import AddToReq from './Components/AddToReq.js';
import "./App.css"
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      chosenStatus: "",
      categories: ['You', 'can', 'do', 'it'],
      status: ['positive', 'negative', 'undecided'],
      status_change: '20/11/2020',
      reason: 'Unclear',
      schedule_impact: false,
      added: true,
      author: 'Ron Burgundy',
      buttonClicked: false
    }
  }
  impactChange=(scheduleBool)=>{
    this.setState({
      schedule_impact: scheduleBool
    })
  }

  addedChange=(addedBool)=>{
    this.setState({
      added: addedBool
    })
  }
 
  greyOut = () => {
    this.setState({
      buttonClicked: true
    });

    let cards = document.getElementsByClassName("card-container");
    [...cards].forEach(card => card.style.filter = "grayscale(1)");

    let inputs = document.getElementsByTagName("input");
    [...inputs].forEach(input=>{
      input.style.border = "none"; 
      input.style.color = "lightgray"
    });

    axios.post(`http://localhost:4000/add_data`, this.state)
    .then(res => {
      console.log(res)
    })
  }

  changeAuthor=(authorName)=>{
    this.setState({
      author: authorName
    })
  }
  changeReason=(newReason)=>{
    this.setState({
      reason: newReason
    })
  }
  dropdownChange=(key,value)=>{
    const stateKey = key ==="categories"? "category": "chosenStatus";
    var obj  = {};
    obj[stateKey] = value;
    this.setState(obj);
  }

  setStatusDate=(date)=>{
    this.setState({
      status_change: date
    })
  }

  render() {
    return (
      <div>
        <div id="main-title">
          <i className="material-icons">keyboard_arrow_up</i>
          Details
          </div>
        <div className="cards-wrapper">
        <Dropdown title="categories" options={this.state.categories} dropdownChange={this.dropdownChange}/>
        <Dropdown title="status" options={this.state.status} dropdownChange={this.dropdownChange}/>
        <StatusComp date={this.state.status_change} setStatusDate={this.setStatusDate}/>
        <ReasonComp reason={this.state.reason} changeReason={this.changeReason}></ReasonComp>
        <ScheduleComp buttonClicked={this.state.buttonClicked} impact={this.state.schedule_impact} impactChange={this.impactChange} />
        <AddToReq buttonClicked={this.state.buttonClicked} added={this.state.added} addedChange={this.addedChange}/>
        <AuthorComp author={this.state.author} changeAuthor={this.changeAuthor}></AuthorComp>
        </div>
        <button id="send-btn" onClick={this.greyOut}>Send</button>
      </div>
    )
  }
}
export default App;