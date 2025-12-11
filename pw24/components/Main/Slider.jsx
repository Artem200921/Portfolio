import React from "react";
import { SlideItem } from "./SlideItem.jsx";

export class Slider extends React.Component {
  render() {
    return (
      <section>
        <ul>
          <SlideItem itemsData={this.props.itemsData} hover={this.props.hover} />
        </ul>
      </section>
    );
  }
}
