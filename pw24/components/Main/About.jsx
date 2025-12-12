import React from "react";
import { AboutStyle } from "../styled-component/AboutStyle.js";

export class About extends React.Component {
  render() {
    return (
      <AboutStyle id="about" className="container">
        <h1>About Me</h1>
        <p>
          Hello! My name is Artem Fedorov, i'm a passionate developer with a
          love for creating web applications.
        </p>
      </AboutStyle>
    );
  }
}
