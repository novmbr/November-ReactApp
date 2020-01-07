import React, { Component } from "react";
import "./App.css";
import Query from "./components/query";

import Switch from "react-switch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false
    };

    this.handleDarkModeSwitch = this.handleDarkModeSwitch.bind(this);
  }

  handleDarkModeSwitch(darkMode) {
    this.setState({ darkMode });
  }

  render() {
    return (
      <div className={this.getAppClasses()}>
        <header className="App-header">
          <div className="darkMode-box">
            <span className="credits">Dark Mode: </span>
            <Switch
              onChange={this.handleDarkModeSwitch}
              checked={this.state.darkMode}
              onColor="#86d3ff"
              onHandleColor="#0d0d0d"
              handleDiameter={15}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={10}
              width={24}
            />
          </div>
          <h1 className="title">November</h1>
          <p className="subtitle">AI to change the world. Try it out!</p>

          <Query />

          <p className="credits">
            Made by <a href="https://ismaeelakram.com">Ismaeel Akram</a>.
          </p>
        </header>
      </div>
    );
  }

  getAppClasses() {
    return this.state.darkMode === true ? "App dark" : "App";
  }
}

export default App;
