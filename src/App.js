// class-based components based project
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  // name = "Abhijeet";
  //  name can be rendered using {this.name}
  render() {
    return (
      <div>
        <Navbar />
        {/* passing pageSize as props (country,apikey,all can be passed as props) */}
        <News pageSize={10} country="in" category="sports" />
      </div>
    );
  }
}
