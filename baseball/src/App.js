import React, { Component } from "react";
import logo from "./logo.svg";
import Greeting from './Greeting/Greeting'
import "./App.css";

class App extends Component {
  state = {
    greeting: "Whom are you?"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Hi World test */}
            Hi world
          </p>
          <button onClick={this.greet}>Ahoy There</button>
          <button onClick={this.departure}>Departure</button>
          {/* old div */}
          {/* <div>Who might you be sailor?</div> */}
          {/* method within component */}
          {/* <div>{this.state.greeting}</div> */}
          {/* method imported */}
          <Greeting msg={this.state.greeting}></Greeting>
        </header>
      </div>
    );
  }
  greet = () => {
    this.setState({ greeting: "Ho there wanderer" });
  };
  departure = () => {
    this.setState({ greeting: "so long wanderer" });
  };
}

// function Greeting(props) {
//   return <div>{props.msg}</div>
// }

export default App;
