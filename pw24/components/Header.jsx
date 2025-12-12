import React from "react";
import { HeaderStyle } from "./styled-component/HeaderStyle.js";
import { Navigation } from "./Global/Navigation.jsx";
import { Contacts } from "./Global/Contacts.jsx";

export class Header extends React.Component {
  render() {
    return (
      <HeaderStyle id="header" >
        <div className="container">
          <Navigation />
          <Contacts />
        </div>
      </HeaderStyle>
    );
  }
}
