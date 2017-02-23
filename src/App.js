import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';


function formatName(user){
  var fullName = "";
  for(var i = 0; i < 10; i++){
    fullName = fullName + ' ' +user.firstName + ' '+user.lastName;
  }
  return fullName;
}

function ToggleButton(props){
  return <button onClick={props.clickme}>Click Me</button>;
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

const user = {
  firstName: 'Oscar',
  lastName: 'Morales'
};

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {date: new Date(), isOn: true};

    this.toggleRender = this.toggleRender.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  toggleRender(){
    this.setState(prevState => ({
        isOn: !prevState.isOn
      }));
  }

  render() {
      const isActive = this.state.isOn; 
      let view = null;
      if(isActive)
      {
        view = (
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <h1 className="greeting">
              Hello, {formatName(user)}!
            </h1>
            <FormattedDate date={this.state.date} />
            <button>Run Lasers</button> 
          </div>
        );
      }else{
        view = (<div>bro</div>);
      }
      return (
        <div className="App">
          <NameForm />
          <FlavorForm />
          <Reservation />
          <ToggleButton clickme={this.toggleRender}/>
          {view}
          {ActionLink()};
          <Calculator />
        </div>
      );
  }
}

export default App;
