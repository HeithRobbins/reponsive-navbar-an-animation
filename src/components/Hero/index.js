import React from "react";
import Particle from "../particle"
import "./styles.css";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div id="particles">
          <Particle />
        </div>
      </div>
    );
  }
}
