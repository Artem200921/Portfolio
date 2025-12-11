import React from "react";
import { Nav } from "./Global/Navigation.jsx";
import { Contacts } from "./Global/Contacts.jsx";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav />
        <Contacts />
      </header>
    );
  }
}
