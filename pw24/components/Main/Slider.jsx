import React from "react";
import { SlideItem } from "./SlideItem.jsx";
import { SliderStyle } from "../styled-component/SliderStyle.js";

export class Slider extends React.Component {
  render() {
    return (
      <SliderStyle id="slider" delay={this.props.delay}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <button onClick={this.props.prevSlide}>&#8592;</button>
            
          </div>
          <ul>
            {this.props.itemsData.map((item, index) => (
              <SlideItem key={index} openPortfolio={this.props.openPortfolio} {...item} />
            ))}
          </ul>

          <button onClick={this.props.nextSlide}>&#8594;</button>
          
        </div>
      </SliderStyle>
    );
  }
}
