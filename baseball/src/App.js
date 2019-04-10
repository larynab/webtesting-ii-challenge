import React, { Component } from "react";
import logo from "./logo.svg";
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
          <button>Departure</button>
          {/* <div>Who might you be sailor?</div> */}
          <div>{this.state.greeting}</div>
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

export default App;
