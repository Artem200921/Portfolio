import React from "react";
import { Nav } from "../styled-component/Nav.js";

export class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#slider">Projects</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </Nav>
    );
  }
}
