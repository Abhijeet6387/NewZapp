// class-based components based project
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

export default class App extends Component {
  // name = "Abhijeet";
  //  name can be rendered using {this.name}
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
