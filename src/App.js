import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./mytravel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Quote
          country="Espagne"
          destination="Grenade"
          distance="1343 km"
          image="https://i.postimg.cc/Kv5XFbRw/11_Photo_generique_kappa_club_playa_granada.jpg"
        />
        <Quote
          country="Turquie"
          destination="Istanbul"
          distance="2484 km"
          image="https://i.postimg.cc/ZK4gwQVc/Istambul.jpg"
        />
      </div>
    );
  }
}

export default App;
