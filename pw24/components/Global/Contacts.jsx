import React from "react";
import { ContactsStyle } from "../styled-component/ContactsStyle.js";

export class Contacts extends React.Component {
  render() {
    return (
      <ContactsStyle>
        <li>
          <a href="mailto:artemfedorov1411@gmail.com">
            artemfedorov1411@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+380996515533">+380 99 651 55 33</a>
        </li>
      </ContactsStyle>
    );
  }
}
