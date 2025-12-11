import React from "react";
import { Contacts } from "./Global/Contacts.jsx";
import { Nav } from "./Global/Navigation.jsx";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Nav/>
        <Contacts/>
        <p>Artem Fedorov.</p>
      </footer>
    );
  }
}
