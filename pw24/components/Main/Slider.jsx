import React from "react";
import { SlideItem } from "./SlideItem.jsx";
import { SliderStyle } from "../styled-component/SliderStyle.js";

export class Slider extends React.Component {
  render() {
    return (
      <SliderStyle id="slider" className="container">
        <button onClick={this.props.prevSlide}>&#8592;</button>
        <ul >
          {this.props.itemsData.map((item, index) => (
            <SlideItem
              key={index}
              {...item}
            />
          ))}
        </ul>

        <button onClick={this.props.nextSlide}>&#8594;</button>
      </SliderStyle>
    );
  }
}
