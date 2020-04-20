import React, { Component } from "react";
import Corona from "./Components/Corona";
import Nav from "./Components/Nav";
import SimpleSlider from "./Components/SimpleSlider";
import Cases from './Components/Cases'
import About from './Components/About'
import Symptoms from './Components/Symptoms'
import Prevention from './Components/Prevention'
import Contact from './Components/Contact'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Corona />
        <Cases />
        <SimpleSlider />
        <br /><br /><br /><br />
        <About />
        <Symptoms />
        <Prevention />
        <Contact />
      </div>
    );
  }
}
