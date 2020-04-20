import React, { Component } from "react";
import Corona from "./Components/Corona";
import Nav from "./Components/Nav";
import SimpleSlider from "./Components/SimpleSlider";
import Cases from './Components/Cases'
import About from './Components/About'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Corona />
        <SimpleSlider />
        <br /><br /><br /><br />
        <Cases />
        <About />
      </div>
    );
  }
}
