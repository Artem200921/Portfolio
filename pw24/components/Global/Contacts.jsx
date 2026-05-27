import React from "react";
import { ContactsStyle } from "../styled-component/ContactsStyle.js";

export class Contacts extends React.Component {
  render() {
    return (
      <ContactsStyle>
        <li>
          <a href="mailto:artemfedorov1411@gmail.com">
            artemfedorov1411@gmx.ch
          </a>
        </li>
        <li>
          <a href="tel:+41798910649">+41 79 891 06 49</a>
        </li>
      </ContactsStyle>
    );
  }
}
