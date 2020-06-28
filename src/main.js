import React, { Component } from 'react'
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero/index"

import Contact from "./components/pages/Contact-me";
import Header from "./components/pages/about-me";
import Projects from "./components/pages/project";

import GlobalStyle from './style/Global';

class Main extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <Router>
        
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Hero />
      </Router>
    );
  }
}

export default Main
