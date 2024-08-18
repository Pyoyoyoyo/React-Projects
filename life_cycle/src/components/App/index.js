import React, { Component } from "react";
import logo from "./logo.svg";
import "./style.css";

import Comment from "../Comment";

class App extends Component {
  state = {
    showComment: true
  };

  toggleComment = () => {
    this.setState({ showComment: !this.state.showComment });
  };

  render() {
    console.log("App Компонент");
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleComment}>X</button>
          <img src={logo} className="App-logo" alt="logo" />

          {this.state.showComment && <Comment zohiogch="Сараа" />}
        </header>
      </div>
    );
  }
}

export default App;
