import React from "react";
import { FooterStyle } from "./styled-component/FooterStyle.js";
import { Contacts } from "./Global/Contacts.jsx";
import { Navigation } from "./Global/Navigation.jsx";

export class Footer extends React.Component {
  render() {
    return (
      <FooterStyle id="footer">
        <div className="container">
          <Navigation />
          <Contacts />
        </div>
      </FooterStyle>
    );
  }
}
